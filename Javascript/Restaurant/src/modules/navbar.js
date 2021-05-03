function navbar() {

    const nav = document.createElement('nav')
    const home = document.createElement('li')
    const menu = document.createElement('li')
    const contact = document.createElement('li')

    home.innerHTML = `Home`
    menu.innerHTML = `Menu`
    contact.innerHTML = `Contact`

    home.id = 'home-nav'
    menu.id = 'menu-nav'
    contact.id = 'contact-nav'

    nav.append(home, menu, contact)

    return nav
}

export default navbar