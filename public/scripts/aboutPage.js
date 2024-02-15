const sections = document.getElementsByClassName('timeline-section');
const popup = document.getElementsByClassName('popup').item(0)

for (const { id } of sections) {
    if (!id) continue;
    const section = document.getElementById(id);
    section.addEventListener('click', () => {
        popup.style.display = 'block'
        popup.style.opacity = '1'
        popup.innerHTML = section.outerHTML
    });
}