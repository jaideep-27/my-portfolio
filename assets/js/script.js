$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    
    // Close menu when close button is clicked
    $('#close-navbar').click(function() {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    // Close menu when menu items are clicked
    $('.navbar ul li a').click(function() {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Add scrolled class to header when scrolled
        if (window.scrollY > 30) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Improved scroll spy with better handling of section boundaries
        let currentSection = '';
        const scrollPosition = $(window).scrollTop();
        
        // Get all sections and determine which one is currently in view
        $('section').each(function () {
            const sectionTop = $(this).offset().top - 250; // Adjusted offset
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = $(this).attr('id');
            }
        });
        
        // Apply the active class to the appropriate navbar item
        if (currentSection !== '') {
            $('.navbar ul li a').removeClass('active');
            $(`.navbar ul li a[href="#${currentSection}"]`).addClass('active');
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        // Adjust the offset for better positioning of sections
        const navbarHeight = 100;
        const targetPosition = $($(this).attr('href')).offset().top - navbarHeight;
        
        // Update active class manually on click for immediate feedback
        $('.navbar ul li a').removeClass('active');
        $(this).addClass('active');
        
        $('html, body').animate({
            scrollTop: targetPosition,
        }, 500, 'linear')
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Jaideep Amrabad";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["MERN Stack Development", "Machine Learning", "Generative AI", "Cloud Computing", "UI/UX Design", "Full Stack Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    try {
        let response = await fetch(type === "skills" ? "./skills.json" : "./projects/projects.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="${skill.name}" class="skill-icon" />
                <span>${skill.name}</span>
            </div>
        </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector(".project-grid");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        // Fix the image path by removing '../' prefix if it exists
        let imagePath = project.image;
        if (imagePath.startsWith('../')) {
            imagePath = imagePath.substring(3); // Remove the '../' prefix
        }
        
        projectHTML += `
        <div class="project-card" onclick="window.open('${project.links.view}', '_blank')">
            <div class="project-image">
                <img src="${imagePath}" alt="${project.name}" />
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.desc}</p>
            </div>
        </div>`
    });
    
    // Only replace content if the container exists and we have projects to show
    if (projectsContainer && projectHTML) {
        projectsContainer.innerHTML = projectHTML;
    }
}

// Add simple animations to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to key elements
    const elementsToAnimate = [
        '.home .content h2',
        '.home .content p',
        '.home .btn',
        '.about .content h3',
        '.about .content .tag',
        '.about .content p',
        '.project-card',
        '.skills .container',
        '.education .box',
        '.contact .container'
    ];
    
    elementsToAnimate.forEach((selector, index) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('fade-in');
            el.style.animationDelay = `${index * 0.1}s`;
        });
    });
    
    // Add tilt effect to project cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 3,
            speed: 400,
            glare: false
        });
    }
});

// Clean up the DOM content loaded event handlers
document.addEventListener('DOMContentLoaded', () => {
    fetchData().then(data => {
        showSkills(data);
    });

    fetchData("projects").then(data => {
        showProjects(data);
    });
    
    // Initialize the scroll spy on page load
    function initScrollSpy() {
        let currentSection = '';
        const scrollPosition = $(window).scrollTop();
        
        // Get all sections and determine which one is currently in view
        $('section').each(function () {
            const sectionTop = $(this).offset().top - 250;
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = $(this).attr('id');
            }
        });
        
        // Apply the active class to the appropriate navbar item
        if (currentSection !== '') {
            $('.navbar ul li a').removeClass('active');
            $(`.navbar ul li a[href="#${currentSection}"]`).addClass('active');
        } else {
            // If no section is active, highlight the one closest to the top
            const firstSection = $('section').first().attr('id');
            $(`.navbar ul li a[href="#${firstSection}"]`).addClass('active');
        }
    }
    
    // Call the function immediately and after a delay to ensure it works properly
    setTimeout(initScrollSpy, 100);
    setTimeout(initScrollSpy, 500);
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

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

// Add preloader functionality
window.addEventListener('load', function() {
    // Shorter loading time for better UX
    setTimeout(() => {
        const loaderContainer = document.querySelector('.loader-container');
        if (loaderContainer) {
            loaderContainer.classList.add('fade-out');
            // Set display none after fade completes
            setTimeout(() => {
                loaderContainer.style.display = 'none';
            }, 700);
        }
    }, 1000); // Reduced loading time
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or default to light
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Set new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Toggle theme on click
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Contact form functionality
$(document).ready(function() {
    // Check if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        // Initialize EmailJS with your User ID
        emailjs.init("prhY2N_tVK3QLdHpd"); // Your EmailJS public key
    } else {
        console.error("EmailJS not loaded");
    }
    
    // Handle contact form submission
    $("#contact-form").on("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        // Show loading state on button
        const submitBtn = $(this).find('button[type="submit"]');
        const originalBtnText = submitBtn.html();
        submitBtn.html('<div class="loader-circle"></div>'); // Clean loading animation
        submitBtn.prop('disabled', true);
        submitBtn.addClass('loading');
        
        // Hide any existing response message
        $("#response-message").hide();
        
        // Get the form element directly
        const form = document.getElementById('contact-form');
        
        // Use EmailJS to send email using the form element
        emailjs.sendForm(
            'my_portfolio', // Your EmailJS service ID
            'template_j86ih8r', // Your EmailJS template ID
            form
        ).then(
            function() {
                // Show success message with animation
                $("#response-message")
                    .html('<div class="success-message"><i class="fas fa-check-circle"></i><p>Your message has been sent successfully!</p></div>')
                    .fadeIn(300)
                    .addClass('visible');
                
                // Reset form
                form.reset();
                
                // Restore button state
                submitBtn.html(originalBtnText);
                submitBtn.prop('disabled', false);
                submitBtn.removeClass('loading');
                
                // Hide success message after delay
                setTimeout(function() {
                    $("#response-message").fadeOut(300, function() {
                        $(this).removeClass('visible');
                    });
                }, 5000);
            },
            function(error) {
                console.error("Email sending failed:", error);
                
                // Show error message with animation
                $("#response-message")
                    .html('<div class="error-message"><i class="fas fa-exclamation-circle"></i><p>Sorry, there was a problem sending your message. Please try again later.</p></div>')
                    .fadeIn(300)
                    .addClass('visible');
                
                // Restore button state
                submitBtn.html(originalBtnText);
                submitBtn.prop('disabled', false);
                submitBtn.removeClass('loading');
                
                // Hide error message after delay
                setTimeout(function() {
                    $("#response-message").fadeOut(300, function() {
                        $(this).removeClass('visible');
                    });
                }, 5000);
            }
        );
    });
});