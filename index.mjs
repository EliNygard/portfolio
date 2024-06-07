import { observerMenu } from "./javascript/htmlObserver.mjs";
import { generateProjectsHtml } from "./javascript/htmlProjects.mjs";
import { scrollToSection } from "./javascript/scroll.mjs";

fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data.projects;
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = "";
    projects.forEach((project) => {
      const projectItem = generateProjectsHtml(project);
      projectsList.appendChild(projectItem);
    });
  });

const goToProjects = document.querySelectorAll(".go-to-projects");
goToProjects.forEach((button) => {
  button.addEventListener("click", () => {
    scrollToSection("projects-section");
  });
});

const goToAbout = document.querySelectorAll(".go-to-about");
goToAbout.forEach((button) => {
  button.addEventListener("click", () => {
    scrollToSection("about-section");
  });
});

const goToTop = document.querySelectorAll(".go-to-top")
goToTop.forEach((button) => {
  button.addEventListener("click", () => {
    scrollToSection("top-page")
  })
})

const emailButton = document.getElementById("email");
emailButton.addEventListener("click", () => {
  window.location.href = "mailto: eli.nygard@gmail.com";
});

function setUpObserver() {
  const target = document.getElementById("project-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.appendChild(observerMenu);
          // alert("home, read about me")
          observer.unobserve(target);
        }
      });
    },
    {
      root: null,
      threshold: 1.0,
    }
  );
  observer.observe(target);
}

// setUpObserver();
