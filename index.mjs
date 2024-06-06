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

  const goToProjects = document.getElementById("go-to-projects")
  goToProjects.addEventListener('click', () => {
      scrollToSection("projects-section")
  })
  
  const goToAbout = document.getElementById("go-to-about")
  goToAbout.addEventListener('click', () => {
      scrollToSection("about-section")
  })


