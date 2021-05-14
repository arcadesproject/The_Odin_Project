let projects = []

let currentProject

function changeNoteStorage(title, description, date, priority, noteID) {
    const projectIndex = projects.findIndex(project => project.name === currentProject.name)
    const noteIndex = projects[projectIndex].list.findIndex(note => note.id === noteID)

    projects[projectIndex].list[noteIndex].title = title.innerText
    projects[projectIndex].list[noteIndex].description = description.innerText
    projects[projectIndex].list[noteIndex].dueDate = date.innerText
    projects[projectIndex].list[noteIndex].priority = priority.innerText
    
    currentProject = projects[projectIndex]
} 

function changeProjectStorage(title, description, projectID) {
    const projectIndex = projects.findIndex(project => project.id === projectID)
    console.log(description)
    projects[projectIndex].name = title.innerText
    projects[projectIndex].description = description

    currentProject = projects[projectIndex]
    console.log(projects)
}

export { projects, currentProject, changeNoteStorage, changeProjectStorage }