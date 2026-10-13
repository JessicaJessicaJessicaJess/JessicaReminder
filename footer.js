document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-container");
  if (!footerContainer) return;

  const year = new Date().getFullYear();

  footerContainer.innerHTML = `
    <footer class="site-footer" aria-label="Site footer">
      <div class="footer-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a> |
        <a href="mailto:your-email@domain.com">Email</a> |
        <span>Designed &amp; Built by Jessica Reminder</span>
      </div>
      <div class="footer-copy" aria-hidden="false">&copy; ${year} Jessica Reminder. All rights reserved.</div>
    </footer>
  `;
});