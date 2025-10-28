const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleButton.textContent =
      document.body.classList.contains("dark")
        ? "Switch to Light Theme"
        : "Switch Theme";
  });
}