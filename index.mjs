fetch("projects.json")
.then(response => response.json())
.then(data => {
    console.log(data.contact);

    const projects = data.projects;
    console.log(projects);
    
    projects.forEach((project) => {
        const projectsList = document.getElementById("projects-list")
        projectsList.append(displayProjects(project))
    })
})

function displayProjects() {
    const projectItem = document.createElement("li")


    return projectItem
}

