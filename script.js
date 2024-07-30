const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

function toggleDropdown(id) {
  // Close all dropdowns first
  const allDropdowns = document.getElementsByClassName("dropdown-content");
  for (let dropdown of allDropdowns) {
    if (dropdown.id !== id && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
      const button = document.querySelector(`button[onclick="toggleDropdown('${dropdown.id}')"]`);
      if (button) button.setAttribute('aria-expanded', 'false');
    }
  }

  // Toggle the clicked dropdown
  const dropdown = document.getElementById(id);
  const isExpanded = dropdown.classList.toggle("show");
  const button = document.querySelector(`button[onclick="toggleDropdown('${id}')"]`);
  if (button) button.setAttribute('aria-expanded', isExpanded.toString());
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const allDropdowns = document.getElementsByClassName("dropdown-content");
    for (let dropdown of allDropdowns) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        const button = document.querySelector(`button[onclick="toggleDropdown('${dropdown.id}')"]`);
        if (button) button.setAttribute('aria-expanded', 'false');
      }
    }
  }
}

// Close the dropdown menu if the user presses the Escape key
window.onkeydown = function(event) {
  if (event.key === "Escape") {
    const allDropdowns = document.getElementsByClassName("dropdown-content");
    for (let dropdown of allDropdowns) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        const button = document.querySelector(`button[onclick="toggleDropdown('${dropdown.id}')"]`);
        if (button) button.setAttribute('aria-expanded', 'false');
      }
    }
  }
}












