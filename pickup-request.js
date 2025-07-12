// Load existing history on page load
window.onload = function () {
  const history = JSON.parse(localStorage.getItem("pickupHistory")) || [];
  history.forEach(item => addHistoryToDOM(item));
};

function handlePickupRequest() {
  const time = new Date().toLocaleString();
  const entry = `Pickup requested at: ${time}`;

  // Save to localStorage
  const history = JSON.parse(localStorage.getItem("pickupHistory")) || [];
  history.push(entry);
  localStorage.setItem("pickupHistory", JSON.stringify(history));

  // Update DOM
  addHistoryToDOM(entry);
  alert("Pickup requested successfully!");
}

function addHistoryToDOM(entry) {
  const container = document.getElementById("request-history");
  const item = document.createElement("div");
  item.textContent = entry;
  container.appendChild(item);
}

// Placeholder function for redeem store button
function goToRedeem() {
  alert("Redeem Store is under development 🚧");
}
