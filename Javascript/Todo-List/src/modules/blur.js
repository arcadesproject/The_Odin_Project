function blur() {
    //change layer on top of background
    const blur = document.getElementById('blur')
    blur.style.display = 'block'
    console.log('test')
}

function noBlur() {
    const blur = document.getElementById('blur')
    blur.style.display = 'none'
}

export { blur, noBlur }