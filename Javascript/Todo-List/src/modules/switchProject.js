import { projects } from './projectFactory'

let currentProject

function switchProject(project) {
    currentProject = project
}

switchProject(projects[0])

export { currentProject, switchProject }