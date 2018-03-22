mapError = () => {
    window.alert("Failed To Load The Map");
};

var locations = [
    {
        title : 'Eagle Hotel , Rajpura' , 
        location : {
            lat : 30.486144 , 
            lng : 76.601802
        }
    },
    {
        title : 'Mayur Hotel , Rajpura' , 
        location : {
            lat : 30.486102 , 
            lng : 76.600679
        }
    },
    {
        title : 'Mayur Hotel , Rajpura' , 
        location : {
            lat : 30.637781 , 
            lng : 76.8202445
        }
    },
    {
        title : 'Park Plaza , Zirakpur' , 
        location : {
            lat : 30.637781 , 
            lng : 76.8202445
        }
    },
    {
        title : 'Fab Hotel Royal Plaza , Zirakpur' , 
        location : {
            lat : 30.6346329 , 
            lng : 76.8206079
        }
    },
    {
        title : 'Hotel 6 , Zirakpur' , 
        location : {
            lat : 30.6386541 , 
            lng : 76.8199659
        }
    },
    {
        title : 'Regenta Almeida , Zirakpur' , 
        location : {
            lat : 30.666423 , 
            lng : 76.812431
        }
    }
];

function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 30.517632,
            lng: 76.66355
        },
        zoom: 17
    });

    var defaultIcon = makeMarkerIcon('FF0000');
    var locationIcon = makeMarkerIcon('0000FF');

    var bounds = new google.maps.LatLngBounds();
    var positionOFChitkara = {
        lat: 30.5176089,
        lng: 76.659511
    }
    var marker = new google.maps.Marker({
        position: positionOFChitkara,
        title: "Chitkara University , Rajpura , Punjab",
        animation: google.maps.Animation.DROP,
        icon: defaultIcon,
        map: map
    });
    bounds.extend(marker.getPosition());
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title = locations[i].title;

        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: locationIcon,
            map: map
        });
        bounds.extend(marker.getPosition());
    }

    map.fitBounds(bounds);

    function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
            '|40|_|%E2%80%A2',
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(21, 34));
        return markerImage;
    }
}

var clock;

$(document).ready(function () {

    // Grab the current date
    var currentDate = new Date();

    // Set some date in the past. In this case, it's always been since Jan 1
    var pastDate = new Date(currentDate.getFullYear(), 0, 1);

    // Calculate the difference in seconds between the future and current date
    var diff = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter'
    });
});


var cards = document.querySelectorAll('.event-card');

function transition() {
    if (this.classList.contains('event-active')) {
        this.classList.remove('event-active');
    } else {
        this.classList.add('event-active');
    }
}

cards.forEach(function (card) {
    return card.addEventListener('click', transition);
});

$(window).load(function () {
    $('#wrapper').addClass('loaded');
})

$('.more-info').click(function () {
    $("#card").toggleClass('flip');
    $('#arrow').remove();
});
$('#background').click(function () {
    $('#card').removeClass('flip');
});

$(".boton").wrapInner('<div class=botontext></div>');

$(".botontext").clone().appendTo($(".boton"));

$(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');

$(".twist").css("width", "25%").css("width", "+=3px");

$('#shushant').click(function () {
    swal({
      title: 'Shushant (FEST HEAD )',
      text: 'Contact No :- 7986350238',
      imageUrl: './images/team/sushant.jpg',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Shushant Image',
      animation: false
    })
});

$('#heena').click(function () {
    swal({
      title: 'Heena Babbar (FEST HEAD )',
      text: 'Contact No :- 9988650057',
      imageUrl: './images/team/heena.jpg',
      imageWidth: 200,
      imageHeight: 300,
      imageAlt: 'Heena Image',
      animation: false
    })
});

$('#rama').click(function () {
    swal({
      title: 'Rama Shanker (Secretary)',
      text: 'Contact No :- 7009087416',
      imageUrl: './images/team/rama.jpeg',
      imageWidth: 175,
      imageHeight: 150,
      imageAlt: 'Rama Image',
      animation: false
    })
});

$('#both').click(function () {
    swal({
        html : '<span>Shushant (FEST HEAD) Contact No :- 7986350238</span><br><span>Heena Babbar (FEST HEAD) Contact No :- 9988650057</span>'
    })
});