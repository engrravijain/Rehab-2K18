mapError = () => {
    window.alert("Failed To Load The Map");
};

// $(window).load(function () {
//     $('.loader').fadeOut();
// });

var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var re1 = /^ (?=.* [A - Za - z])(?=.*\\d)[A - Za - z\\d^ a - zA - Z0 -9].{ 5, 50 } $/;
var alphabets = /^([a-zA-Z]+\s)|([a-zA-Z])/;
var numbers = /^[0-9]+$/;

function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 30.517632,
            lng: 76.66355
        },
        zoom: 15
    });

    var defaultIcon = makeMarkerIcon('FF0000');

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
    //     bounds.extend(marker.getPosition());

    // map.fitBounds(bounds);

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

    $('.trigger').click(function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur');
        $('.hideDiv').toggleClass('blur');
        // $('#sectioh1').addClass('blur');
        // $('.back').addClass('open');
        // $('.back').attr('style','filter:none;');

        // return false;
    });


$('.leader').on("change keyup paste", function () {
    if ($(this).val()) {
        $('.icon-paper-plane').addClass("next");
    } else {
        $('.icon-paper-plane').removeClass("next");
    }
});

$('.email').on("change keyup paste",
    function () {
        if ($(this).val()) {
            $('.icon-paper-plane').addClass("next");
        } else {
            $('.icon-paper-plane').removeClass("next");
        }
    }
);

$('.next-button').hover(
    function () {
        $(this).css('cursor', 'pointer');
    }
);

$('.next-button.email').click(
    function (e) {
        if (re.test($('.email').val())) {
            $('.black-colour-email').hide();
            $('.black-colour-email').text("");
            $('.email-section').addClass("fold-up");
            $('.phone-section').removeClass("folded");
        }
        else {
            $('.black-colour-email').hide();
            $('.form-heading').append('<span class="black-colour-email">Enter email in the format: abc@xyz.com</span>');
        }
    }
);

$('.next-button.leader-name').click(
    function () {
        if (alphabets.test($('.leader').val().trim())) {
            $('.black-colour-email').hide();
            $('.black-colour-email').text("");
            $('.team-leader-section').addClass("fold-up");
            $('.email-section').removeClass("folded");
        }
        else {
            $('.black-colour-email').hide();
            $('.form-heading').append('<span class="black-colour-email">Enter alphabets only</span>')
        }
    }
);

$('.phone').on("change keyup paste",
    function () {
        if ($(this).val()) {
            $('.icon-lock').addClass("next");
        } else {
            $('.icon-lock').removeClass("next");
        }
    }
);

$('.next-button').hover(
    function () {
        $(this).css('cursor', 'pointer');
    }
);

$('.next-button.phone').click(
    function () {
        var val = $('.phone').val();
        if (numbers.test(val) && val.length === 10) {
            $('.black-colour-email').hide();
            $('.black-colour-email').text("");
            $('.phone-section').addClass("fold-up");
            $('.address-section').removeClass("folded");
        }
        else {
            $('.black-colour-email').hide();
            $('.form-heading').append('<span class="black-colour-email">Enter 10 digit phone number</span>')
        }
    }
);

$('.address').on("change keyup paste",
    function () {
        if ($(this).val()) {
            $('.icon-repeat-lock').addClass("next");
        } else {
            $('.icon-repeat-lock').removeClass("next");
        }
    }
);

$('.next-button.address').click(
    function () {
        if ($('.address').val().length > 0) {
            $('.black-colour-email').hide();
            $('.black-colour-email').text("");
            $('.address-section').addClass("fold-up");
            $('.event-section').removeClass('folded');
            $('.black-colour-email').show();
            $('.black-colour-email').text("Select your event");
        }
        else {
            $('.black-colour-email').hide();
            $('.form-heading').append('<span class="black-colour-email">Enter a valid address</span>')
        }
    }
);

$('.event').on("change",
    function () {
        if ($(this).val()) {
            $('.icon-repeat-lock').addClass("next");
        } else {
            $('.icon-repeat-lock').removeClass("next");
        }
    }
);

$('.next-button.event').click(
    function () {
        // if ($('.event:selected').val()) {
            $('.black-colour-email').hide();
            $('.black-colour-email').text("");
            $('.event-section').addClass("fold-up");
            $('.gender-section').removeClass("folded");
            $('.black-colour-email').show();
            $('.black-colour-email').text("Select your gender");
        // }
        // else {
        //     $('.black-colour-email').hide();
        //     $('.form-heading').append('<span class="black-colour-email">Select a event</span>')
        // }
    }
);

$('.gender').on("change",
    function () {
        if ($(this).val()) {
            $('.icon-repeat-lock').addClass("next");
        } else {
            $('.icon-repeat-lock').removeClass("next");
        }
    }
);

$('.next-button.gender').click(
    function () {
            $('.black-colour-email').hide();
            $('.black-colour-email').text("");
            $('.gender-section-section').addClass("fold-up");
            $('.success').attr('style', 'margin-top:0;');
            $('.black-colour-email').hide();
            $('.form-heading').append('<span class="black-colour-email"></span>')
    }
);

function checkEnter(e) {
    // if(e.keyCode === 13) {
    //     if(!$(e["srcElement"].parentNode).hasClass('folded')) {
    //         if($(e["srcElement"].parentNode).is(':visible')) {
    //           if(e["srcElement"].value.indexOf('@') >=0) {
    //                 $('.email-section').addClass("fold-up");
    //                 $('.password-section').removeClass("folded");
    //           }
    //         } 
    //     }     
    // }
    if (e.keyCode === 13) {
        if ($(e["srcElement"].parentNode).hasClass('email-section')) {
            if (re.test(e["srcElement"].value)) {
                $('.black-colour-email').hide();
                $('.black-colour-email').text("");
                $('.email-section').addClass("fold-up");
                $('.phone-section').removeClass("folded");
            }
            else {
                $('.black-colour-email').hide();
                $('.form-heading').append('<span class="black-colour-email">Enter email in the format: abc@xyz.com</span>')
                //window.alert("Enter email in the format: abc@xyz.com");
            }
        }
        else if ($((e["srcElement"].parentNode)).hasClass('team-leader-section')) {
            if (alphabets.test(e["srcElement"].value)) {
                $('.black-colour-email').hide();
                $('.black-colour-email').text("");
                $('.team-leader-section').addClass("fold-up");
                $('.email-section').removeClass("folded");
            }
            else {
                $('.black-colour-email').hide();
                $('.form-heading').append('<span class="black-colour-email">Enter alphabets only</span>')
            }
        }
        else if ($((e["srcElement"].parentNode)).hasClass('phone-section')) {
            if (numbers.test(e["srcElement"].value) && e["srcElement"].value.length === 10) {
                $('.black-colour-email').hide();
                $('.black-colour-email').text("");
                $('.phone-section').addClass("fold-up");
                $('.address-section').removeClass("folded");
            }
            else {
                $('.black-colour-email').hide();
                $('.form-heading').append('<span class="black-colour-email">Enter 10 digit phone number</span>')
            }
        }
        else if ($((e["srcElement"].parentNode)).hasClass('address-section')) {
            if (e["srcElement"].value.length > 0) {
                $('.black-colour-email').hide();
                $('.black-colour-email').text("");
                $('.address-section').addClass("fold-up");
                $('.event-section').removeClass('folded');
                $('.black-colour-email').show();
                $('.black-colour-email').text("Select your event");
            }
            else {
                $('.black-colour-email').hide();
                $('.form-heading').append('<span class="black-colour-email">Enter a valid address</span>')
            }
        }
        else if ($((e["srcElement"].parentNode)).hasClass('event-section')) {
            if (e["srcElement"].value) {
                $('.black-colour-email').hide();
                $('.black-colour-email').text("");
                $('.event-section').addClass("fold-up");
                $('.gender-section').removeClass("folded");
                $('.black-colour-email').show();
                $('.black-colour-email').text("Select your gender");
            }
            else {
                $('.black-colour-email').hide();
                $('.form-heading').append('<span class="black-colour-email">Enter a valid address</span>')
            }
        }
        else if ($((e["srcElement"].parentNode)).hasClass('gender-section')) {
            if (e["srcElement"].value) {
                $('.black-colour-email').hide();
                $('.black-colour-email').text("");
                $('.gender-section-section').addClass("fold-up");
                $('.success').attr('style', 'margin-top:0;');
            }
            else {
                $('.black-colour-email').hide();
                $('.form-heading').append('<span class="black-colour-email">Enter a valid address</span>')
            }
        }
    }

}

    $(".boton").wrapInner('<div class=botontext></div>');

    $(".botontext").clone().appendTo($(".boton"));

    $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');

    $(".twist").css("width", "25%").css("width", "+=3px");

$('.btn-close').click(function () {
    $('.modal-wrapper.open').attr('style', 'visibility:none;')
    // $('.blur').attr('style', 'filter:none;');
    $('.pp-tablecell').toggleClass('blur');
    $('.hideDiv').removeClass('blur');
});
