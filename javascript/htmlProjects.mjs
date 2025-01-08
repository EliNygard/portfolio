import { redirect } from "./redirect.mjs";

export function generateProjectsHtml(project) {
  const projectItem = document.createElement("li");
  projectItem.classList.add("project-item");

  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("project-wrapper");

  const img = document.createElement("img");
  img.title = `Visit ${project.title}`
  img.src = project.screenshot.img;
  img.alt = project.screenshot.alt;
  img.addEventListener("click", (event) => {
    event.preventDefault();
    redirect(project.link);
  });

  const projectTextContent = document.createElement("div");
  projectTextContent.classList.add("project-text-content");

  const linkWrapper = document.createElement("div");
  linkWrapper.title = `Visit ${project.title}`
  linkWrapper.addEventListener("click", (event) => {
    event.preventDefault();
    redirect(project.link);
  });

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title");

  const projectTitle = document.createElement("h4");
  projectTitle.textContent = project.title;

  const linkIcon = document.createElement("i");
  linkIcon.classList.add("fa-solid", "fa-square-arrow-up-right");

  const description = document.createElement("p");
  description.textContent = project.description;

  const languagesList = document.createElement("ul");
  languagesList.classList.add("languages", "newsreader-font");

  const languages = project.technologies;
  languages.forEach((language) => {
    const item = document.createElement("li");
    const span = document.createElement("div");
    span.classList.add("flex", "items-center");
    span.textContent = language;
    item.appendChild(span);
    languagesList.appendChild(item);
  });

  const gitLink = document.createElement("a");
  gitLink.title = "GitHub Repository";
  gitLink.classList.add("github-link");
  gitLink.addEventListener('click', (event) => {
    event.preventDefault()
    redirect(project.gitHub)
  })

  const gitLinkText = document.createElement("p");
  gitLinkText.classList.add("uppercase");
  gitLinkText.textContent = "View code";

  const gitIcon = document.createElement("i");
  gitIcon.classList.add("fa-brands", "fa-github");

  projectItem.appendChild(projectWrapper);
  projectWrapper.append(img, projectTextContent);
  projectTextContent.append(linkWrapper, languagesList, gitLink);
  linkWrapper.append(titleContainer, description);
  titleContainer.append(projectTitle, linkIcon);
  gitLink.append(gitLinkText, gitIcon);

  return projectItem;
}
