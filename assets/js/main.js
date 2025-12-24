document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("nav-bar");
    const body = document.body;

    function updateTogglePosition() {
        
        if (window.innerWidth >= 992) {
            toggle.style.left = sidebar.offsetWidth + "px";
        } else {
            // rest postion for mobile and tablet
            toggle.style.left = "0px";
        }
    }

    updateTogglePosition();

    toggle.addEventListener("click", () => {
        
        if (window.innerWidth >= 992) {
            sidebar.classList.toggle("collapsed");
            toggle.classList.toggle("sidebar-collapsed");

            // adjust body padding with toggle
            if (!sidebar.classList.contains("collapsed")) {
                body.style.paddingLeft = sidebar.offsetWidth + "px";
            } else {
                body.style.paddingLeft = "80px";
            }

            // move the toggle button
            updateTogglePosition();
        } else {
            sidebar.classList.toggle("sidebarshow");
            body.style.paddingLeft = "0";
        }
    });

    // Update on window resize
    window.addEventListener("resize", () => {
        
        updateTogglePosition();

        if (window.innerWidth >= 992) {
            body.style.paddingLeft = sidebar.classList.contains("collapsed") ? "80px" : sidebar.offsetWidth + "px";
        } else {
            body.style.paddingLeft = "0";
        }
    });


    // Set initial body padding on page load
    window.addEventListener("load", () => {
        if (window.innerWidth >= 992) {
            body.style.paddingLeft = sidebar.offsetWidth + "px";
        }
    });



    // LINK ACTIVE
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
    }

    linkColor.forEach((l) => l.addEventListener("click", colorLink));

});



//------ main carousel
$('.main-carousel').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//------ news carousel
$('.news-carousel').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//--------------- Event Carousel
$(".event-carousel").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//--------------- Data table
$(document).ready(function () {
    $('#applicationsTable').DataTable({
        pageLength: 5,
        lengthChange: false,
        searching: false,
        info: false,
        ordering: true,
        language: {
            paginate: {
                previous: '<',
                next: '>'
            }
        }
    });
});


//--------------- full screen view functionality inside table
$('#toggleFullscreen').on('click', function () {
    debugger
    $('.application-card').addClass('fullscreen');
    $('#closeFullscreen').removeClass('d-none');

    setTimeout(function () {
        $('#applicationsTable').DataTable().columns.adjust();
    }, 300);
});

//----------------v CLOSE fullscreen
$('#closeFullscreen').on('click', function () {
    debugger
    $('.application-card').removeClass('fullscreen');
    $('#closeFullscreen').addClass('d-none');

    setTimeout(function () {
        $('#applicationsTable').DataTable().columns.adjust();
    }, 300);
});

