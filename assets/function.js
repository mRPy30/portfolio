
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Load stored theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("darkmode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    themeIcon.title = "Switch to Light Mode";
}

themeToggle.addEventListener("click", function () {
    body.classList.toggle("darkmode");
    
    if (body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
        themeIcon.title = "Switch to Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("fa-sun", "fa-moon");
        themeIcon.title = "Switch to Dark Mode";
    }
});

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 30;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 50);
          } else {
            counter.textContent = target;
            counter.classList.add('counting');
          }
        };
        
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}


function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
  }
});
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach((el) => observer.observe(el));


document.querySelectorAll('.skills-section').forEach(sec => skillObserver.observe(sec));

function emailMe(event) {
event.preventDefault(); 

const email = "araquejanvier@gmail.com";

navigator.clipboard.writeText(email).then(() => {
  console.log("Email copied to clipboard!");

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
}).catch(err => {
  alert("Failed to copy email. Please try manually.");
  console.error("Clipboard error:", err);
});
}

window.addEventListener('load', () => {
document.querySelectorAll('.animate-seq').forEach(el => {
  el.classList.add('start');
});
});

document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".project-card").forEach(card => {
  const link = card.querySelector("a.project-link");
  if (link && link.textContent.trim().toLowerCase() === "preview soon") {
    card.classList.add("preview-soon");
  }
});
});

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
        title: "BARANGAY TIBAY SEALED",
        desc: "Sample Logo Barangay"
    },
    {
      img: "pictures/client3business.jpg",
      title: "Ms.Stiquee Fisball Business",
      desc: "Client Business"
    },
    {
        img: "pictures/Logo-TQ.png",
        title: "TaskQueya",
        desc: "Personal Project Website logo"
    },
    {
      img: "pictures/sample.png",
      title: "Sample Business",
      desc: "School Project"
    }
];

// Lightbox functionality
let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// Open lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        openLightbox(currentIndex);
    });
});

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryData[index].img;
    lightboxTitle.textContent = galleryData[index].title;
    lightboxDesc.textContent = galleryData[index].desc;
    lightboxCounter.textContent = `${index + 1} / ${galleryData.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    openLightbox(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    openLightbox(currentIndex);
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close on background click
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Graphics section observer
const graphicsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.graphics-section').forEach((el) => graphicsObserver.observe(el));