let condition = false
/**
 * @type {Element}
 */
const box = document.getElementsByClassName('box').item(0)
box.style.opacity = '0'
box.style.pointerEvents = 'none'
window.addEventListener('focus', () => {
    box.style.opacity = '1'
    box.style.pointerEvents = ''
}, false)

setTimeout(() => { box.style.opacity = '1', box.style.pointerEvents = '' }, 1000)

function changeLocation(href) {
    box.style.opacity = '0'
    box.style.pointerEvents = 'none'
    setTimeout(() => {
        window.location.href = href
    }, 500)
}

const head = document.getElementsByTagName('head').item(0)
head.innerHTML += (`
    <title>NAMASTE</title>
    <link rel="icon" href="assets/NAMASTE-LOGO.png">
    <link rel="stylesheet" href="/style.css">
`)