import createID from './createID'

let projects = []

const projectFactory = (name, description) => {
    const list = []
    const id = createID('project')
    return { name, description, list, id }
}

const addProject = (name) => {
    const project = projectFactory(name)
    projects.unshift(project)
}

addProject('test')
addProject('test2')


//remove project too?

export { addProject, projects, projectFactory }