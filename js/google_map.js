function initMap() {
    var styleArray = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1d2c4d"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8ec3b9"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1a3646"
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "color": "#bfc8d7"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#4b6878"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#64779e"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#4b6878"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "color": "#183030"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#334e87"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#023e58"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#283d6a"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6f9ba5"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1d2c4d"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#bfc8d7"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi.government",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#bfc8d7"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "stylers": [
                {
                    "color": "#bfc8d7"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#023e58"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f3f4f8"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#304a7d"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ccd2df"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#b6bfd1"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2c6675"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#255763"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#b0d5ce"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#023e58"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#98a5be"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1d2c4d"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#283d6a"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3a4762"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0e1626"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#4e6d70"
                }
            ]
        }
    ];

    var mapOptions = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(38.943762952286605, -77.39394154365539),
        styles: styleArray,
        scrollwheel: false
    });


    var image = 'images/map_icon.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 38.9450000128344, lng: -77.39332999999999},
        map: mapOptions,
        icon: image
    });
}