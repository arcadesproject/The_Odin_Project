import createID from './createID'
import { projects } from './storage'

const projectFactory = (name, description) => {
    const list = []
    const id = createID('project')
    return { name, description, list, id }
}

const addProject = (name, description) => {
    const project = projectFactory(name, description)
    projects.unshift(project)
    return project
}

addProject('test', 'testing')
addProject('test2', 'testing')

export { addProject, projectFactory }