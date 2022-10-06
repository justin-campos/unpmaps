
//informacion marcador 1
const contentString =
'<div id="content">' +
//'<div id="siteNotice">' +
//"</div>" +
//'<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
'<div id="bodyContent">' +
' <p> <a href="article-details.html" class="url"> <b>Fruta Polar</b> </a> </p>'+
"</div>" +
"</div>";

const unp = {
  north: 12.138440,
  south: 12.136232,
  west: -86.221658,
  east: -86.218874,
};
const unpcenter = { lat: 12.137797, lng: -86.221002 };

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: unpcenter,
    restriction: {
      latLngBounds: unp,
      strictBounds: false,
    },
    zoom: 17,
    mapId: '663481e2c353fdbc'	//663481e2c353fdbc	//75505d6b7ec9798d 


  });


  //contiene el contenido del string
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  //marcador
  const marker1 = new google.maps.Marker({
    position: { lat: 12.136868, lng: -86.219786 },
    map,
    title: "Hello World ! ",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "images/marker/marker1.png",
      scaledSize: new google.maps.Size(37, 41)
    },
  });
  //animation
  marker1.addListener("click",() => {
   
    toggleBounce(1);

  });
  marker1.addListener("click", toggleBounce);

  //contenido del marcador
  marker1.addListener("click", () => {
    infowindow.open({
      anchor: marker1,
      map,
      shouldFocus: false,
    });
  });
    //marcador2
    const marker2 = new google.maps.Marker({
      position: { lat: 12.136850760022238, lng: -86.21960584060814 },
      map,
      title: "marker 2 ! ",
      animation: google.maps.Animation.DROP,
      icon: {
        url: "images/marker/marker2.png",
        scaledSize: new google.maps.Size(37, 41)
      },
    });

    marker2.addListener("click",() => {
   
      toggleBounce(2);
  
    });
    marker2.addListener("click", toggleBounce);
  
    //contenido del marcador
    marker2.addListener("click", () => {
      infowindow.open({
        anchor: marker2,
        map,
        shouldFocus: false,
      });
    });
    //marcador3
    const marker3 = new google.maps.Marker({
      position: { lat: 12.137481752367345, lng: -86.22032903172597 },
      map,
      title: "Hello World ! ",
      animation: google.maps.Animation.DROP,
      icon: {
        url: "images/marker/marker4.png",
        scaledSize: new google.maps.Size(37, 41)
      },
    });

    marker3.addListener("click",() => {
   
      toggleBounce(3);
  
    });
    marker3.addListener("click", toggleBounce);
  
    //contenido del marcador
    marker3.addListener("click", () => {
      infowindow.open({
        anchor: marker3,
        map,
        shouldFocus: false,
      });
    });
      //marcador4
      const marker4 = new google.maps.Marker({
        position: { lat: 12.1371752514748, lng: -86.22028505025747 },
        map,
        title: "Hello World ! ",
        animation: google.maps.Animation.DROP,
        icon: {
          url: "images/marker/marker1.png",
          scaledSize: new google.maps.Size(37, 41)
        },
      });
    
      //contenido del marcador
      marker4.addListener("click", () => {
        infowindow.open({
          anchor: marker1,
          map,
          shouldFocus: false,
        });
      });
  
      //marcador5
      const marker5 = new google.maps.Marker({
        position: { lat: 12.137686146111813, lng: -86.21966039667217 },
        map,
        title: "Los Madroños",
        animation: google.maps.Animation.DROP,
        icon: {
          url: "images/marker/marker5.png",
          scaledSize: new google.maps.Size(37, 41)
        },
      });
      marker5.addListener("click",() => {
   
        toggleBounce(5);
    
      });
      marker5.addListener("click", toggleBounce);
    
      //contenido del marcador
      marker5.addListener("click", () => {
        infowindow.open({
          anchor: marker5,
          map,
          shouldFocus: false,
        });
      });

      //marcador6
      const marker6 = new google.maps.Marker({
        //, 
        position: { lat: 12.137539922791628, lng: -86.21971896274152 },
        map,
        title: "la capilla",
        animation: google.maps.Animation.DROP,
        icon: {
          url: "images/marker/marker7.png",
          scaledSize: new google.maps.Size(37, 41)
        },
      });
      marker6.addListener("click",() => {
   
        toggleBounce(6);
    
      });
      marker6.addListener("click", toggleBounce);
    
      //contenido del marcador
      marker6.addListener("click", () => {
        infowindow.open({
          anchor: marker6,
          map,
          shouldFocus: false,
        });
      });

      //marcador7
      //12.137688735438847, -86.22106940183187
      const marker7 = new google.maps.Marker({
        //, 
        position: { lat: 12.137688735438847, lng: -86.22106940183187 },
        map,
        title: "Cancha",
        animation: google.maps.Animation.DROP,
        icon: {
          url: "images/marker/marker8.png",
          scaledSize: new google.maps.Size(40, 41)
        },
      });
      marker7.addListener("click",() => {
   
        toggleBounce(7);
    
      });
      marker7.addListener("click", toggleBounce);
    
      //contenido del marcador
      marker7.addListener("click", () => {
        infowindow.open({
          anchor: marker7,
          map,
          shouldFocus: false,
        });
      });

  //edificio i
  const edificioi = new google.maps.Marker({
    //, 
    position: { lat: 12.137359000484103, lng: -86.22063713586793 },
    map,
    title: "Edificio I",
    icon: {
      url: "images/marker/edificioi1.png",
      scaledSize: new google.maps.Size(50, 20)
    },
  });
//--
  // Define the LatLng coordinates for the polygon's path.
  const edificiounp = [
    { lat: 12.13752609455547, lng: -86.22080132765765 },
    { lat: 12.13746709392041, lng: -86.22040369021417 },
    { lat: 12.137197657520872, lng: -86.22044258224068 },
    { lat: 12.137261247157971, lng: -86.2208429018929 },
  ];

  // Construct the polygon.
  const edificioipoly = new google.maps.Polygon({
    paths: edificiounp,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: '#FF0000',
      fontWeight: 'bold',
      text: 'Hello World',
      fontSize: '20px',
  },
  });

  edificioipoly.setMap(map);

  // EDIFICIO H
  const edificioh = [
    { lat: 12.13799114112007, lng: -86.2200916252531 },
    { lat: 12.13796229641714, lng: -86.21977847738448 },
    { lat: 12.137799061562136, lng: -86.21978920621939 },
    { lat: 12.137816106170146, lng: -86.22010369519236 },
  ];

  // EDIFICIO H
  const edificiohpoly = new google.maps.Polygon({
    paths: edificioh,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: '#FF0000',
      fontWeight: 'bold',
      text: 'Hello World',
      fontSize: '20px',
  },
  });

  edificiohpoly.setMap(map);

    // EDIFICIO F
    const edificiof = [
      { lat: 12.137944102706927, lng: -86.21975302105047 },
      { lat: 12.137908046821408, lng: -86.21915622960917 },
      { lat: 12.137759234296782, lng: -86.21916226457881 },
      { lat: 12.137799223573689, lng: -86.21976374988537 },
    ];
  
    // EDIFICIO F
    const edificiofpoly = new google.maps.Polygon({
      paths: edificiof,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      label: {
        color: '#FF0000',
        fontWeight: 'bold',
        text: 'Hello World',
        fontSize: '20px',
    },
    });
  
    edificiofpoly.setMap(map);

    //EDIFICIO D

    const edificiod = [
      { lat: 12.137491764883515, lng: -86.21957800692938 },
      { lat: 12.137455708936766, lng: -86.21918841611209  },
      { lat: 12.137343607689358, lng: -86.21919981549918 },
      { lat: 12.137375074710935, lng: -86.21958672410774 },
    ];
  
    // EDIFICIO D
    const edificiodpoly = new google.maps.Polygon({
      paths: edificiod,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      label: {
        color: '#FF0000',
        fontWeight: 'bold',
        text: 'Hello World',
        fontSize: '20px',
    },
    });
  
    edificiodpoly.setMap(map);

      //EDIFICIO e
    const edificioe = [
      { lat: 12.137377407479987, lng: -86.21969153595691 },
      { lat: 12.137371790371292, lng: -86.219592220153   },
      { lat: 12.136975382686902, lng: -86.21962341024017 },
      { lat: 12.136980999803956, lng: -86.21972026366879 },
    ];
  
    // EDIFICIO e
    const edificioepoly = new google.maps.Polygon({
      paths: edificioe,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      label: {
        color: '#FF0000',
        fontWeight: 'bold',
        text: 'Hello World',
        fontSize: '20px',
    },
    });
  
    edificioepoly.setMap(map);



  //animation
function toggleBounce(x) {
  
  //animacion de los
  if(isNaN(x) == false){
    
    for(let i=1; i<7; i++ ){
      eval('marker'+ i +'.setAnimation(null);')
    }

    eval('if (marker'+ x +'.getAnimation() !== null) {'+
    'marker'+ x +'.setAnimation(null);'+
    '} else {'+
      'marker'+ x +'.setAnimation(google.maps.Animation.BOUNCE);'+
    '}'
    )
  }
  x = 0;
}

  // add event listeners for the buttons
  document.getElementById("hide-markers").addEventListener("click", hideMarkers);

  function setMapOnAll(map) {
    //for (let i = 0; i < markers.length; i++) {
      marker1.setMap(map);
    }

  // Removes the markers from the map, but keeps them in the array.
  function hideMarkers(){
    setMapOnAll(null);
  }
}





