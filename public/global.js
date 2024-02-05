function changeLocation(href) {
    document.body.innerHTML += '<div class="blurBackground" id="BLUR_BG"><span class="loader"></span></div>'
    setTimeout(() => {
        window.location.href = href
    }, 1000)
}

window.addEventListener('focus', () => {
    const blurBackground = document.getElementById('BLUR_BG')
    blurBackground.remove()
})