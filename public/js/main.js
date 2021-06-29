"use strict";

// * navbar
const navbar = document.querySelector(".navbar");
const active = navbar.dataset.active;

const links = navbar.querySelectorAll(".nav-link");

links.forEach((link) => {
  if (link.innerHTML.toLowerCase() === active) {
    link.classList.add("active");
  }
});

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

// * Courses

import { courseDet as courses } from "./coursedet.js";

const courseContainer = document.querySelector(".course-container");

if (courseContainer.classList.contains("featured")) {
  courses.forEach((course) => {
    if (course.featured == true) {
      let imgSrc = `http://img.youtube.com/vi/${course.src}/maxresdefault.jpg`;
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card-img">
          <img src="${imgSrc}" alt="">
        </div>
        <div class="card-body">
          <h2 class="card-title">${course.title}</h2>
          <p class="card-text">
            ${course.text}
          </p>
          <a href="${course.link}" class="card-link btn btn-dark">Go to the Course <i class="fas fa-external-link-alt btn-icon"></i></a>
        </div>
      `;
      courseContainer.appendChild(card);
    }
  });
} else {
  courses.forEach((course) => {
    let imgSrc = `http://img.youtube.com/vi/${course.src}/maxresdefault.jpg`;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card-img">
      <img src="${imgSrc}" alt="">
    </div>
    <div class="card-body">
      <h2 class="card-title">${course.title}</h2>
      <p class="card-text">
        ${course.text}
      </p>
      <a href="${course.link}" class="card-link btn btn-dark">Go to the Course <i class="fas fa-external-link-alt btn-icon"></i></a>
    </div>
    `;
    courseContainer.appendChild(card);
  });
}

// * Search courses

const courseSearchbar = document.querySelector("#search-course");
const courseSearchButton = document.querySelector("#search-course-btn");

import { searchCourse as search } from "./search_course.js";

courseSearchButton.addEventListener("click", () => {
  // console.log(courseSearchbar.value);
  console.log(search(courseSearchbar.value));
  // console.log(filteredCourse);
});

courseSearchbar.addEventListener("keyup", (key) => {
  if (key.keyCode === 13) {
    let filteredCourse = search(courseSearchbar.value);
    console.log(filteredCourse);
  }
});
