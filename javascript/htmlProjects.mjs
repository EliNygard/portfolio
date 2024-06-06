export function generateProjectsHtml(project) {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item");
  
    const linkWrapper = document.createElement("div");
    linkWrapper.classList.add("link-wrapper");
  
    const img = document.createElement("img");
    img.src = project.screenshot.img;
    img.alt = project.screenshot.alt;
  
    const projectTextContent = document.createElement("div");
    projectTextContent.classList.add("project-text-content");
  
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
  
    const gitLinkText = document.createElement("p");
    gitLinkText.classList.add("uppercase");
    gitLinkText.textContent = "View code";
  
    const gitIcon = document.createElement("i");
    gitIcon.classList.add("fa-brands", "fa-github");
  
    projectItem.appendChild(linkWrapper);
    linkWrapper.append(img, projectTextContent);
    projectTextContent.append(
      titleContainer,
      description,
      languagesList,
      gitLink
    );
    titleContainer.append(projectTitle, linkIcon);
    gitLink.append(gitLinkText, gitIcon);
  
    return projectItem;
  }