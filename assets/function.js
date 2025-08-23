
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
