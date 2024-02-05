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