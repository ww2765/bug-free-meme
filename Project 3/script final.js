const catalog = document.getElementById("catalog");
const toggleBtn = document.getElementById("modeToggle");

let mode = "day";

const data = {
  day: [
    { title: "Morning Tai Chi", image: "taichi.jpg", id: "taichi" },
    { title: "Wet Market Shopping", image: "wet market.jpg", id: "market" },
    { title: "Street Breakfast", image: "breakfast beijing.jpg", id: "breakfast" },
    { title: "Park Calligraphy", image: "Park Calligraphy.jpg", id: "calligraphy" },
    { title: "Cycling Commute", image: "Cycling Commute.jpg", id: "cycling" },
    { title: "Temple Visit", image: "Temple-of-Heaven-gate.jpg", id: "temple" },
    { title: "School Pickup", image: "services-bus.jpg", id: "school" },
    { title: "Public Square Dancing (Practice)", image: "Public Square Dancing.jpg", id: "dancing" },
    { title: "Teahouse Rest", image: "tea ceremony.jpg", id: "teahouse" }
  ],

  night: [
    { title: "Night Market Skewers", image: "skewers.jpeg", id: "skewers" },
    { title: "Square Dancing", image: "square dance.jpg", id: "square-dance" },
    { title: "Late Mahjong", image: "mahjong.jpg", id: "mahjong" },
    { title: "Street Food Vendors", image: "street food.jpg", id: "vendors" },
    { title: "Neon Hutongs", image: "hutong.jpg", id: "hutong" },
    { title: "Evening Stroll", image: "stroll.jpg", id: "stroll" },
    { title: "Night Cycling", image: "cycling.jpeg", id: "night-bike" },
    { title: "Convenience Store Break", image: "convine.png", id: "store" },
    { title: "Bridge Views", image: "caption.jpg", id: "bridge" }
  ]
};

function render() {
  catalog.innerHTML = "";

  data[mode].forEach(item => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
      <a href="activity.html?id=${item.id}">
        <img src="${item.image}" alt="${item.title}">
        <figcaption>${item.title}</figcaption>
      </a>
    `;

    catalog.appendChild(figure);
  });
}

toggleBtn.addEventListener("click", () => {
  mode = mode === "day" ? "night" : "day";
  document.body.classList.toggle("night");
  toggleBtn.textContent =
    mode === "day" ? "Switch to Night Mode" : "Switch to Day Mode";
  render();
});

render();