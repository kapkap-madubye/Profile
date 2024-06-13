document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.sec');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
//Responsive SIDE BAR MENU
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("open");
});

//pop up function
document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.getElementById("openPopupBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");

    openPopupBtn.addEventListener("click", function() {
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


            
            var typed=new Typed('.Auto',{
                strings: ["C#","C++","Python","HTML/CSS","JavaScript","ReactJs","SQL"],
                typeSpeed:220,
                backSpeed:220,
                loop:true
            });

// Click Scroll function 

document.querySelectorAll('.navbar a, .sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
