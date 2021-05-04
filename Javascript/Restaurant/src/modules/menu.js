function menu() {
    const container = document.createElement('section')
    container.id = 'menu-container'

    class Meal {
        constructor(title, description, price) {
            this.title = title,
            this.description = description,
            this.price = Number(price).toFixed(2)
        }
    }

    // Takes in meal and produces card to display on DOM
    function createCard (meal) {
        const card = document.createElement('div')
        card.className = 'meal-card'

        const title = document.createElement('p')
        const description = document.createElement('p')
        const price = document.createElement('p')

        title.className = 'meal-title'
        title.innerHTML = `${meal.title}`

        description.className = 'meal-description'
        description.innerHTML = `${meal.description}`

        price.className = 'meal-price'
        price.innerHTML = `$${meal.price}`

        card.append(title, description, price)
        return card
    }

    let mealsArray = []
    const calzone = new Meal('Calzone', 'Steinbrenner\'s favorite', 9.50)
    const babka = new Meal('Chocolate Babka', 'The last one', 11.00)
    const jambalaya = new Meal('Jambalaya', 'Mmm. Soup for you!', 6.50)
    const yoghurt = new Meal('Fat free yoghurt', 'You have waited your whole life for this', 4.00)
    const rye = new Meal('Marble Rye', 'Make sure it gets home safe', 7.00)
    const mint = new Meal('Junior Mint', 'Can reach the smallest of places', 1.50)
    const peaches = new Meal('Mackinaw Peaches', 'Only available for a limited time', 3.00)
    const chicken = new Meal('Kenny Rogers Chicken', 'The brightest chicken around', 8.00)
    mealsArray.push(calzone, babka, jambalaya, yoghurt, rye, mint, peaches, chicken)

    mealsArray.forEach(meal => {
        let card = createCard(meal)
        container.appendChild(card)
    })

    return container
}

export default menu