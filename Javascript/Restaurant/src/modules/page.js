import navbar from './navbar'
import home from './home'

function createHeader() {
    const header = document.createElement('header')
    header.id = 'header'
    header.appendChild(navbar())
    return header
}

function createMain() {
    const main = document.createElement('section')
    main.id = 'main'
    main.appendChild(home())
    return main
}

function createFooter() {
    const footer = document.createElement('footer')
    footer.id = 'footer'

    const creator = document.createElement('p')
    const source = document.createElement('p')
    source.id = 'source'

    creator.innerHTML = `Made by <a href="https://github.com/arcadesproject"> arcadesproject<img id="git" alt="github icon" src="../src/assets/git.png"></a>`
    source.innerHTML = `<a href="https://github.com/arcadesproject/The_Odin_Project/tree/main/Javascript/Restaurant"> source`

    footer.append(creator, source)
    return footer 
}

function page() {
    const content = document.getElementById('content')
    content.append(createHeader(), createMain(), createFooter())
}

export default page