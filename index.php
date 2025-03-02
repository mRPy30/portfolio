<?php
$currentPage = basename($_SERVER['PHP_SELF']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="logo.png" type="image/x-icon">
    <title><?php echo "My Portfolio"; ?></title>
    
    <link rel="stylesheet" href="fonts.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="font-awesome-6/css/all.css">
   

    <header class="navbar">
        <div class="logo">
          <span>JEA</span>
        </div>

        <div class="hamburger" onclick="toggleMenu()">
            <i class="fas fa-bars"></i>
        </div>

        <div class="menu" id="nav-menu">
          <a class="nav <?= $currentPage == 'home.php' ? 'active' : '' ?>" href="home.php">Home</a>
          <a class="nav <?= $currentPage == 'about.php' ? 'active' : '' ?>" href="about.php">About</a>
          <a href="#" class="button">Contact Me</a>
          <a href="#" id="theme-toggle">
              <i class="fas fa-moon" id="theme-icon" title="Switch to Dark Mode"></i>
          </a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
    </header>

    <style>
      body {
        overflow-y: hidden;
      }
    </style>

</head>

<body>


    <section class="body-content">
      <div class="content-container">
          <div class="image-container">
            <img src="mypic.png" alt="">
          </div>
          <div class="text">
              <h1>I`m IT Student<br>Janvier Araque</h1>
              <p>I develop your website<br>I create you a beautiful design project</p>
          
          <div class="icons">
              <i class="fas fa-laptop"></i>
              <i class="fas fa-mobile-alt"></i>
          </div>
          
          <a href="#" class="btn">Learn More</a>
          </div>
      </div>
    </section>
    
</body>
<script src="function.js"></script>
<script>
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}
</script>

</html>