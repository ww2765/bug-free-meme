const catalog = document.getElementById("catalog");
const toggleBtn = document.getElementById("modeToggle");

let mode = "day";

const data = {
  day: [
    { title: "Morning Tai Chi", image: "taichi.jpg", id: "taichi" },
    { title: "Wet Market Shopping", image: "wet market.jpg", id: "market" },
    { title: "Street Breakfast", image: "breakfast beijing.jpg", id: "breakfast" },
    { title: "Park Calligraphy", image: "Park Calligraphy.jpg", id: "calligraphy" },
    { title: "Cycling Commute", image: "Cycling Commute.jpeg", id: "cycling" },
    { title: "Temple Visit", image: "images/day/temple.jpg", id: "temple" },
    { title: "School Pickup", image: "images/day/school.jpg", id: "school" },
    { title: "Public Square Dancing (Practice)", image: "images/day/dancing.jpg", id: "dancing" },
    { title: "Teahouse Rest", image: "images/day/teahouse.jpg", id: "teahouse" }
  ],

  night: [
    { title: "Night Market Skewers", image: "images/night/skewers.jpg", id: "skewers" },
    { title: "Square Dancing", image: "images/night/square-dance.jpg", id: "square-dance" },
    { title: "Late Mahjong", image: "images/night/mahjong.jpg", id: "mahjong" },
    { title: "Street Food Vendors", image: "images/night/vendors.jpg", id: "vendors" },
    { title: "Neon Hutongs", image: "images/night/hutong.jpg", id: "hutong" },
    { title: "Evening Stroll", image: "images/night/stroll.jpg", id: "stroll" },
    { title: "Night Cycling", image: "images/night/night-bike.jpg", id: "night-bike" },
    { title: "Convenience Store Break", image: "images/night/store.jpg", id: "store" },
    { title: "Bridge Views", image: "images/night/bridge.jpg", id: "bridge" }
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