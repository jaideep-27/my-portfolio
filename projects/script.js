// Header scroll
let nav = document.querySelector("nav");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// Menu toggle
$('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

// Hide menu on scroll
$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
});

// Tab title change on visibility
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Jaideep's Portfolio";
        $("#favicon").attr("href", "../assets/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "../assets/images/favhand.png");
    }
});

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
});

// Initialize Isotope for filtering
var $grid = $('.projects-container').isotope({
    itemSelector: '.projects-item',
    layoutMode: 'fitRows',
    masonry: {
        columnWidth: 200
    }
});

// Filter items on button click
$('.button-group').on('click', 'button', function() {
    $('.button-group').find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// Disable developer tools shortcuts
document.onkeydown = function(e) {
    if(e.keyCode == 123) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
}