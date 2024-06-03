fetch("projects.json")
.then(response => response.json())
.then(data => {
    console.log(data.projects);
    console.log(data.contact);
    // display projects
})

