from asyncio.windows_events import NULL
import os
import requests
from django.shortcuts import render

import datetime
import locale
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, jsonify
from helpers import login_required
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from tempfile import mkdtemp
from flask_socketio import SocketIO, emit, join_room, leave_room

# fecha
locale.setlocale(locale.LC_TIME, 'es_ES.UTF-8')
x = datetime.datetime.now()


app = Flask(__name__)

db = SQL("sqlite:///unpmaps.db")

app.config['SECRET_KEY'] = 'reemplazar_clave_secreta'

# Instancia de SocketIo
socketio = SocketIO(app, cors_allowed_origins='*')

# Configure session to use filesystem
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_TYPE"] = "filesystem"

Session(app)


@app.route("/")
@login_required
def index():

    return render_template("index.html")


@app.route("/sitio/<id>", methods=["GET", "POST"])
@login_required
def sitio(id):

    if request.method == "POST":

        comentario = request.form.get('comentario')

        fecha = x.strftime("%I") + ':' + x.strftime("%M") + \
            " " + x.strftime("%A")

        iduser = db.execute(f"SELECT id from users where id=:id_user",
                            id_user=session["user_id"])[0]["id"]

        db.execute(
            "INSERT INTO comentarios (comentario, fecha, iduser, idsitio) VALUES (:comentario, :fecha, :iduser, :idsitio)", comentario=comentario, fecha=fecha, iduser=iduser, idsitio=id)

    sitio = db.execute("SELECT * FROM sitios WHERE id=:id", id=id)

    comentarios = db.execute(
        "SELECT comentarios.comentario, comentarios.fecha, users.username FROM comentarios INNER JOIN users ON comentarios.iduser = users.id WHERE idsitio=:id", id=id)

    return render_template("sitios.html", sitio=sitio, id=id, comentarios=comentarios)


@app.route("/street")
def street():

    return render_template("streetview.html")


@app.route("/datos", methods=["GET", "POST"])
def datos():

    if request.method == "POST":
        url = request.form.get('url')
        print("hola mudno", url)

    return render_template("datospersonales.html")


@app.route("/login", methods=["GET", "POST"])
def login():

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            flash("Nombre de usuario requerido", 'error')
            return render_template("login.html")

        # Ensure password was submitted
        elif not request.form.get("password", 'error'):
            flash("Contraseña requerido")
            return render_template("login.html")

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username=:username",
                          username=request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            flash("Usuario/contraseña invalido", 'error')
            return render_template("login.html")
        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        flash("inicio de sesion correctamente", 'exito')
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""
    if request.method == "POST":
        username = request.form.get('username')
        password = request.form.get('password')
        confirmation = request.form.get('confirmation')

        if not username:
            flash("Username es requerido", 'error')
            return render_template("register.html")
        elif not password:
            flash("Contraseña es requerido", 'error')
            return render_template("register.html")
        elif not confirmation:
            flash("Confirmacion es requerido", 'error')
            return render_template("register.html")

        if password != confirmation:
            flash("La contraseña no coinciden", 'error')
            return render_template("register.html")

        userid = db.execute(
            f"SELECT * FROM users WHERE username = '{request.form.get('username')}'")

        if len(userid) == 1:
            flash("Ese usuario ya existe", 'error')
            return render_template("register.html")

        hash = generate_password_hash(password)

        insert = db.execute(
            "INSERT INTO users (username, hash) VALUES (:username, :hash)", username=username, hash=hash)

        if not insert:
            return flash("usuario no valido", 'error')

        id_user = db.execute("SELECT id FROM users WHERE username=:username",
                             username=username)

        session["user_id"] = id_user[0]["id"]
        flash("registrado", 'exito')
        return redirect('/')

    else:
        return render_template("register.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route('/chat', methods=["GET", "POST"])
@login_required
def chat():

    us = db.execute(
        "SELECT * FROM USERS WHERE id = :id", id=session["user_id"])

    #session["user_id"] = id_user[0]["id"]
    username = us[0]['username']

    print(username)

    return render_template("chat.html", username=username)


@ socketio.on('saludar')
def saludar(mensaje, user, fecha):

    print("fecha: ", fecha)

    data = {"message": mensaje, "username": user, "fecha": fecha}
    # Emitir a todos con el argumento broadcast
    emit('general', data,
         broadcast=True, include_self=False)

    # Enviar respuesta de evento emit al cliente
    return (f'{mensaje}')
