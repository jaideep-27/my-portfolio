$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Jaideep's Portfolio";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

// Projects
let projectsContainer = document.querySelector(".work .box-container");
projectsContainer.innerHTML = `
    <div class="grid-item basicweb">
        <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="../assets/images/projects/portfolio1.png" alt="Portfolio Website" />
            <div class="content">
                <div class="tag">
                    <h3>Portfolio Website</h3>
                </div>
                <div class="desc">
                    <p>Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!</p>
                    <div class="btns">
                        <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="https://github.com/jaideep-27/my-portfolio" class="btn" target="_blank"><i class="fas fa-code"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-item mern">
        <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="../assets/images/projects/skillset.png" alt="SkillsetAI" />
            <div class="content">
                <div class="tag">
                    <h3>SkillsetAI</h3>
                </div>
                <div class="desc">
                    <p>Skillset AI transforms education with visual learning, gamification, and personalized tools, making learning engaging and effective.</p>
                    <div class="btns">
                        <a href="https://skillset-ai.netlify.app/" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="https://github.com/jaideep-27/skillset-ai" class="btn" target="_blank"><i class="fas fa-code"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-item mern">
        <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="../assets/images/projects/streamvibe.png" alt="StreamVibe" />
            <div class="content">
                <div class="tag">
                    <h3>StreamVibe</h3>
                </div>
                <div class="desc">
                    <p>A modern video sharing platform built with React, Node.js, MongoDB, and Cloudinary integration.</p>
                    <div class="btns">
                        <a href="https://streamvibe1.netlify.app/" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="https://github.com/jaideep-27/streamvibe" class="btn" target="_blank"><i class="fas fa-code"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-item basicweb">
        <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="../assets/images/projects/ne.png" alt="Nakshatra Explorers" />
            <div class="content">
                <div class="tag">
                    <h3>Nakshatra Explorers</h3>
                </div>
                <div class="desc">
                    <p>A platform to explore the beauty of stars and learn about different constellations and celestial events.</p>
                    <div class="btns">
                        <a href="https://jaideep-27.github.io/Nakshatra_Explorers/" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="https://github.com/jaideep-27/Nakshatra_Explorers" class="btn" target="_blank"><i class="fas fa-code"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-item basicweb">
        <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="../assets/images/projects/dreampath.png" alt="Dream Path" />
            <div class="content">
                <div class="tag">
                    <h3>Dream Path</h3>
                </div>
                <div class="desc">
                    <p>An AI web application that helps students find their ideal career path using AI.</p>
                    <div class="btns">
                        <a href="https://dreampath-cw.my.canva.site/" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="https://github.com/jaideep-27/dreampath" class="btn" target="_blank"><i class="fas fa-code"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-item android">
        <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="../assets/images/projects/ecocheck.png" alt="EcoCheck" />
            <div class="content">
                <div class="tag">
                    <h3>EcoCheck</h3>
                </div>
                <div class="desc">
                    <p>An application in development.</p>
                    <div class="btns">
                        <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="#" class="btn" target="_blank"><i class="fas fa-code"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// vanilla tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
});

// isotope filter products
var $grid = $('.box-container').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    masonry: {
        columnWidth: 200
    }
});

// filter items on button click
$('.button-group').on('click', 'button', function () {
    $('.button-group').find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}