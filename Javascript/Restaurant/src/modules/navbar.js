import home from './home'
import contact from './contact'
import menu from './menu'

function navbar() {
    const nav = document.createElement('nav')
    const home = document.createElement('li')
    const menu = document.createElement('li')
    const contact = document.createElement('li')

    home.innerHTML = `Home`
    menu.innerHTML = `Menu`
    contact.innerHTML = `Contact`

    home.id = 'home-nav'
    home.classList.add('active')
    menu.id = 'menu-nav'
    contact.id = 'contact-nav'

    home.addEventListener('click', switchContent)
    home.addEventListener('click', tabSwitcher)
    menu.addEventListener('click', switchContent)
    menu.addEventListener('click', tabSwitcher)
    contact.addEventListener('click', switchContent)
    contact.addEventListener('click', tabSwitcher)


    nav.append(home, menu, contact)

    return nav
}

// Change which page is displayed
function switchContent({target}) {
    const content = document.getElementById('main');
    content.removeChild(content.lastChild)

    switch (target.id) {
      case 'home-nav':
        main.appendChild(home())
        break;
      case 'menu-nav':
        main.appendChild(menu())
        break;
      case 'contact-nav':
        main.appendChild(contact())
        break;
    }
}

// Change which tab is highlight to reflect current page
function tabSwitcher({target}) {
    const nav = document.querySelector('nav')
    const navChildren = Array.from(nav.children)
    navChildren.forEach(element => {
      element.classList.remove('active')
    });
    target.classList.add('active')
}

export default navbar