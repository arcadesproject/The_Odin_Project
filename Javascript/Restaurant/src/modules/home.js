function home() {
    const container = document.createElement('section')
    container.id = 'home-container'

    const title = document.createElement('h1')
    title.innerHTML = `Restaurant`
    title.id = 'title'

    const image = document.createElement('img')
    image.src = `../src/assets/restaurant.jpg`
    image.id = 'restaurant-img'

    const description = document.createElement('p')
    description.innerHTML = `Wow what a great restaurant! Why not come join Jerome & his pals.`

    container.append(title, image, description)

    return container
}

export default home