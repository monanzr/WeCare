Splitting();
ScrollOut({
    targets: '.word',
    scrollingElement: '.hero__left--item'
});


$(document).ready(function() {
    $('.carousel_01').owlCarousel({
        items: 10,
        loop: true,
        margin: 30,
        nav: true,

        mouseDrag: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                owl2row: false,
            },
            480: {
                items: 1,
                owl2row: false,
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4,
                owl2row: true,
            }
        }
    });

    $('.carousel_02').owlCarousel({
        items: 1,
        loop: true,
        nav: true,

        mouseDrag: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });


});


// var card7 = document.querySelector(".card--7");
//
// card7.addEventListener('mousemove', function (e) {
//
//     var wh = window.innerHeight / 2,
//         ww = window.innerWidth / 2;
//     card7.style.setProperty('--mouseX7', (e.clientX - ww) / 25);
//     card7.style.setProperty('--mouseY7', (e.clientY - wh) / 25);
//
// });
//
// card7.addEventListener('mouseleave', function (e) {
//
//     card7.style.setProperty('--mouseX7', 0);
//     card7.style.setProperty('--mouseY7', 0);
//
// });

function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("popularSearch__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("popularSearch__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


window.addEventListener('scroll', () => {
    var element = document.querySelector('.findDoctor__box');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.findDoctor__box').addClass("animate__zoomIn");
    } else {
        $('.findDoctor__box').removeClass("animate__zoomIn");
    }
});

window.addEventListener('scroll', () => {
    var element = document.querySelector('.whyUs__box');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.whyUs__box').addClass("animate__zoomIn");
    } else {
        $('.whyUs__box').removeClass("animate__zoomIn");
    }
});

window.addEventListener('scroll', () => {
    var element = document.querySelector('.feedback___img');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.feedback___img').addClass("animate__bounceIn");
    } else {
        $('.feedback___img').removeClass("animate__bounceIn");
    }
});