document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header class="navbar">
      <div class="nav-left">
        <a href="index.html" class="logo"><img src="media/logo.png" alt="Jessica Reminder logo" class="site-logo"></a>
        <a href="index.html" class="brand-name">Jessica Reminder</a>
      </div>
      <nav class="nav-right">
        <a href="gallery.html">Work</a>
        <a href="about.html">About</a>
        <a href="media/Jessica_Reminder_Resume.pdf" class="nav-resume" download>Download Resume</a>
      </nav>
      <div class="breadcrumb" aria-label="Breadcrumb">
        <nav class="breadcrumb-inner">
          <a href="index.html">Home</a>
          <span class="crumb-sep">/</span>
          <a href="gallery.html">Work</a>
        </nav>
      </div>
    </header>
  `;
});