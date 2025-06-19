const products = [
  { name: "iPhone 14", category: "mobile", price: 79999, image: "https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg" },
  { name: "Samsung Galaxy M14", category: "android phone", price: 12999, image: "https://m.media-amazon.com/images/I/81fVpFvNzDL._SX679_.jpg" },
  { name: "Realme Narzo 60", category: "android phone", price: 15999, image: "https://m.media-amazon.com/images/I/71eX9epP2-L._SX679_.jpg" },
  { name: "boAt Rockerz 450", category: "headphone", price: 1499, image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SX679_.jpg" },
  { name: "Sony WH-1000XM4", category: "headphone", price: 22990, image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg" },
  { name: "HP Laptop 15s", category: "laptop", price: 45999, image: "https://m.media-amazon.com/images/I/81cHpJNr07L._SX679_.jpg" },
  { name: "Samsung Galaxy Tab A9", category: "tablet", price: 13499, image: "https://m.media-amazon.com/images/I/81AFZQhF8ZL._SX679_.jpg" },
  { name: "Milton Water Bottle", category: "bottle", price: 899, image: "https://m.media-amazon.com/images/I/71v5BTTUshL._SX679_.jpg" },
  { name: "Men's Cotton T-Shirt", category: "clothes", price: 499, image: "https://m.media-amazon.com/images/I/61MJzYKz+zL._SY741_.jpg" }
];

const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");
const sortOptions = document.getElementById("sortOptions");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(items) {
  productList.innerHTML = "";
  if (items.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p style="font-size: small; color: gray;">${product.category}</p>
    `;
    productList.appendChild(card);
  });
}

function applyFilters() {
  const query = searchBar.value.toLowerCase();
  const priceRange = priceFilter.value;
  const sortBy = sortOptions.value;

  let filtered = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  if (priceRange) {
    filtered = filtered.filter(product => {
      if (priceRange === "0-1000") return product.price <= 1000;
      if (priceRange === "1000-5000") return product.price > 1000 && product.price <= 5000;
      if (priceRange === "5000-10000") return product.price > 5000 && product.price <= 10000;
      if (priceRange === "10000+") return product.price > 10000;
    });
  }

  switch (sortBy) {
    case "lowToHigh":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "highToLow":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "nameAZ":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nameZA":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  displayProducts(filtered);
}

searchBtn.addEventListener("click", applyFilters);
