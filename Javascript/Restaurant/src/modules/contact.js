function contact() {
    const container = document.createElement('section')
    container.id = 'contact-container'

    const phone = document.createElement('p')
    const address = document.createElement('p')

    phone.innerHTML = `Phone: 987 654 321`
    address.innerHTML = `Address: 44 Made Up Street, Town Too Far From You, Snobsville`

    phone.id = 'phone'
    address.id = 'address'

    container.append(phone, address)

    return container
}

export default contact