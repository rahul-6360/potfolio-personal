// Smooth Scroll Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Tab Switching Logic
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active to clicked
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
// Project Modal Data
const projectDetails = {
  project1: {
    title: "Student Result Management System",
    desc: "A complete student result management system built using Django + MongoDB. Features: secure login, result upload, analytics dashboard.",
    tech: "Django, Python, MongoDB, HTML, CSS, JS"
  },
  project2: {
    title: "Portfolio Website",
    desc: "A fully responsive personal portfolio website designed with HTML, CSS, JavaScript. Includes resume download, skills, and projects showcase.",
    tech: "HTML, CSS, JavaScript"
  },
  project3: {
    title: "E-commerce Store",
    desc: "A small e-commerce application built using React.js frontend and Node.js backend with product listing, cart, and checkout system.",
    tech: "React.js, Node.js, MongoDB"
  }
};

// Modal Handling
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const proj = projectDetails[btn.dataset.project];
    modalBody.innerHTML = `
      <h2>${proj.title}</h2>
      <p>${proj.desc}</p>
      <p><strong>Technologies:</strong> ${proj.tech}</p>
    `;
    modal.style.display = "flex";
  });
});
closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

 