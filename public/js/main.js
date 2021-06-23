// * Sidebar
const hamburger = document.querySelector(".hamburger_menu");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.setAttribute(
    "style",
    "position: fixed; height: 100vh; width: 100%; top: 0; left: 0; background: rgba(0, 0, 0, 0.4); z-index: 99;"
  );
  document.body.appendChild(overlay);
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    document.body.removeChild(overlay);
  });
});
