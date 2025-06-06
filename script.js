// Modo escuro e claro
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light-mode";

  document.body.classList.add(currentTheme);

  themeToggle.textContent = currentTheme === "light-mode" ? "🌙" : "☀️";

  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "light-mode" ? "🌙" : "☀️";
  });
});

// Animação de zoom nos sabores
document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll('.zoom-img');
  imagens.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.15)';
      img.style.transition = 'transform 0.4s cubic-bezier(.4,2,.6,1)';
      img.style.zIndex = 2;
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.transition = 'transform 0.4s cubic-bezier(.4,2,.6,1)';
      img.style.zIndex = 1;
    });
  });
});
