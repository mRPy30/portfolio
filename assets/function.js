
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

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.progress-bar');
      bars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-section').forEach(sec => skillObserver.observe(sec));

function emailMe(event) {
  event.preventDefault(); // Prevent default link behavior

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
