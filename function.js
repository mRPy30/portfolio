
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


