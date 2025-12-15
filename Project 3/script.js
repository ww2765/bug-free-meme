const dayActivities = [
{ title: "Morning Taijiquan", img: "https://source.unsplash.com/600x400/?beijing,park", desc: "Retirees practicing Taijiquan in neighborhood parks, synchronizing breath, movement, and time." },
{ title: "Wet Market Shopping", img: "https://source.unsplash.com/600x400/?china,market", desc: "Daily grocery shopping at wet markets, where bargaining and freshness define value." },
{ title: "Hutong Cycling", img: "https://source.unsplash.com/600x400/?hutong,bicycle", desc: "Cycling through narrow hutongs as a primary way of navigating the city." },
{ title: "Street Breakfast", img: "https://source.unsplash.com/600x400/?chinese,breakfast", desc: "Buying jianbing or soy milk from street vendors during the morning rush." },
{ title: "Public Square Dancing", img: "https://source.unsplash.com/600x400/?china,dancing", desc: "Group dancing in public plazas, transforming leftover urban space into social stages." },
{ title: "Calligraphy Practice", img: "https://source.unsplash.com/600x400/?chinese,calligraphy", desc: "Water calligraphy written on pavement, disappearing as it dries." },
{ title: "Mahjong Gathering", img: "https://source.unsplash.com/600x400/?mahjong", desc: "Friends and neighbors playing mahjong as a daily ritual of strategy and sociality." },
{ title: "Food Delivery Pickups", img: "https://source.unsplash.com/600x400/?china,delivery", desc: "Delivery riders waiting outside restaurants, connecting kitchens to apartments." },
{ title: "Afternoon Tea Shops", img: "https://source.unsplash.com/600x400/?beijing,cafe", desc: "Milk tea and cafés as informal study and rest spaces throughout the city." }
];


const nightActivities = [
{ title: "Night Market Eating", img: "https://source.unsplash.com/600x400/?beijing,night,market", desc: "Street food stalls lighting up neighborhoods with smoke, sound, and smell." },
{ title: "Late-Night Skewers", img: "https://source.unsplash.com/600x400/?chinese,bbq", desc: "Friends gathering over chuanr skewers after work." },
{ title: "Evening Walks", img: "https://source.unsplash.com/600x400/?beijing,night,street", desc: "Slow walks through residential compounds as the city cools." },
{ title: "Subway Commute", img: "https://source.unsplash.com/600x400/?beijing,subway", desc: "Dense subway rides marking the transition from work to rest." },
{ title: "Mobile Phone Scrolling", img: "https://source.unsplash.com/600x400/?smartphone,night", desc: "Quiet phone use in beds, buses, and bedrooms before sleep." },
{ title: "24-Hour Convenience Stores", img: "https://source.unsplash.com/600x400/?convenience,store,china", desc: "Bright interiors punctuating dark streets." },
{ title: "Night Fishing", img: "https://source.unsplash.com/600x400/?night,fishing", desc: "Solitary fishing along rivers and lakes under streetlights." },
{ title: "Late Study Sessions", img: "https://source.unsplash.com/600x400/?study,night", desc: "Students studying late in dorms and libraries." },
{ title: "Cleaning the City", img: "https://source.unsplash.com/600x400/?street,cleaning,night", desc: "Sanitation workers maintaining the city while most people sleep." }
];


const catalog = document.getElementById('catalog');
const toggle = document.getElementById('modeToggle');
let isDay = true;


function render(items) {
catalog.innerHTML = '';
items.forEach(item => {
const card = document.createElement('article');
card.className = 'card';


card.innerHTML = `
<img src="${item.img}" alt="${item.title}">
<h2>${item.title}</h2>
<div class="description">${item.desc}</div>
`;


card.addEventListener('click', () => {
card.classList.toggle('active');
});


catalog.appendChild(card);
});
}


toggle.addEventListener('click', () => {
isDay = !isDay;
document.body.classList.toggle('night');