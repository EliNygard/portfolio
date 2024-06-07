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

const goToProjects = document.getElementById("go-to-projects");
goToProjects.addEventListener("click", () => {
  scrollToSection("projects-section");
});

const goToAbout = document.getElementById("go-to-about");
goToAbout.addEventListener("click", () => {
  scrollToSection("about-section");
});

const emailButton = document.getElementById("email");
emailButton.addEventListener("click", () => {
  window.location.href = "mailto: eli.nygard@gmail.com";
});

function setUpObserver() {
  const target = document.getElementById("observer-target");
  console.log(target);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.appendChild(observerMenu("Home", "Read about me"))
          // alert("home, read about me")
          observer.unobserve(target)
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

setUpObserver();
