// Gallery data
const galleryData = [
    {
        img: "pictures/bts_price.png",
        title: "BTS Business",
        desc: "Pricing business design"
    },
    {
        img: "pictures/quote1.png",
        title: "Quote 1",
        desc: "Motivational Wallpaper"
    },
    {
        img: "pictures/wallpaper2.jpg",
        title: "Bible Verse",
        desc: "Desktop Wallpaper"
    },
    {
        img: "pictures/Birthday_celebrant_client.jpg",
        title: "Birthday Party",
        desc: "Second Client"
    },
    {
        img: "pictures/logoPsD - no bg.png",
        title: "Barangay Tibay Seal",
        desc: "Personal Project Logo"
    },
    {
        img: "pictures/client3business.jpg",
        title: "Ms.Stiquee Fishball",
        desc: "Client Business"
    },
    {
        img: "pictures/Logo-TQ.png",
        title: "TaskQueya",
        desc: "Personal Project Logo"
    },
    {
        img: "pictures/sample.png",
        title: "Sample Business",
        desc: "School Project"
    }
];

function initPortfolio() {
    // ─── THEME TOGGLE STATE MANAGEMENT ───
    const themeToggle = document.getElementById("theme-toggle");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    const body = document.body;

    // Helper to update toggle descriptions
    function updateThemeIcons(isLight) {
        if (themeToggle) {
            themeToggle.title = isLight ? "Switch to Dark Mode" : "Switch to Light Mode";
        }
        if (themeToggleMobile) {
            themeToggleMobile.title = isLight ? "Switch to Dark Mode" : "Switch to Light Mode";
        }
    }

    // Load theme setting (Default is Dark, Light is toggled via class 'lightmode' and dark class is toggled on documentElement)
    function applyTheme(isLight) {
        if (isLight) {
            body.classList.add("lightmode");
            document.documentElement.classList.remove("dark");
            updateThemeIcons(true);
        } else {
            body.classList.remove("lightmode");
            document.documentElement.classList.add("dark");
            updateThemeIcons(false);
        }
    }

    const currentTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isLightMode = currentTheme === "light" || (!currentTheme && !prefersDark);
    applyTheme(isLightMode);

    // Toggle logic for desktop & mobile buttons
    function toggleTheme() {
        const isCurrentlyLight = body.classList.contains("lightmode");
        const nextLightState = !isCurrentlyLight;
        localStorage.setItem("theme", nextLightState ? "light" : "dark");
        applyTheme(nextLightState);
    }

    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggleTheme);


    // ─── LIVE RUNNING DIGITAL CLOCK (PH Timezone) ───
    function updateClock() {
        const clockEl = document.getElementById("live-clock");
        if (!clockEl) return;
        
        const options = {
            timeZone: "Asia/Manila",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        };
        try {
            const timeString = new Intl.DateTimeFormat("en-US", options).format(new Date());
            clockEl.textContent = timeString;
        } catch (e) {
            // Fallback to local system time if timezone translation errors
            const now = new Date();
            const format = (num) => String(num).padStart(2, '0');
            clockEl.textContent = `${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();


    // ─── VIEWPORT SCROLL REVEAL (Intersection Observer) ───
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stop observing once revealed to maintain performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal-item').forEach((el) => {
        revealObserver.observe(el);
    });


    // ─── LIGHTBOX INTERACTIVE COMPONENT ───
    let currentIndex = 0;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    // Attach click events to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'), 10);
            openLightbox(currentIndex);
        });
    });

    function openLightbox(index) {
        if (!lightbox || !galleryData[index]) return;
        currentIndex = index;
        
        // Setup lightbox elements
        lightboxImg.src = galleryData[index].img;
        lightboxTitle.textContent = galleryData[index].title;
        lightboxDesc.textContent = galleryData[index].desc;
        lightboxCounter.textContent = `${index + 1} / ${galleryData.length}`;
        
        // Show lightbox with transitions
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        
        // Allow rendering frame first, then animate class
        setTimeout(() => {
            lightbox.classList.add('active');
            document.body.classList.add('lightbox-active');
        }, 10);
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.classList.remove('lightbox-active');
        
        // Hide after transition completes
        setTimeout(() => {
            lightbox.classList.remove('flex');
            lightbox.classList.add('hidden');
        }, 300);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryData.length;
        openLightbox(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        openLightbox(currentIndex);
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (!lightbox || lightbox.classList.contains('hidden')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolio);
} else {
    initPortfolio();
}

// ─── MOBILE MENU TOGGLE ───
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    if (!menu) return;
    
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("block");
    } else {
        menu.classList.remove("block");
        menu.classList.add("hidden");
    }
}

// ─── EMAIL CLIPBOARD & REDIRECT ───
function emailMe(event) {
    event.preventDefault(); 
    const email = "araquejanvier@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
        // Open Gmail in a new tab
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    }).catch(err => {
        // Fallback standard mailto if clipboard API is blocked
        window.location.href = `mailto:${email}`;
        console.error("Clipboard copy failed, falling back to standard mailto link:", err);
    });
}