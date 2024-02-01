let condition = false
/**
 * @type {Element}
 */
const box = document.getElementsByClassName('box').item(0)
box.style.opacity = '0'
window.onmouseover(() => {
    if (!condition) {
        condition = true
        console.log('works')
        box.style.opacity = '1'
    }
})

function changeLocation(href) {
    box.style.opacity = '0'
    setTimeout(() => {
        window.location.href = href
    }, 490)
}