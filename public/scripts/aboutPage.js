const sections = document.getElementsByClassName('timeline-section');
const popup = document.getElementsByClassName('popup').item(0)

const isMobile = window.matchMedia("(max-width: 768px) and (orientation: portrait)").matches;

if (!isMobile) {
    for (const { id } of sections) {
        if (!id) continue;
        const section = document.getElementById(id);
        section.addEventListener('click', () => {
            popup.style.display = 'block'
            popup.style.opacity = '1'
            popup.innerHTML = section.outerHTML
            document.body.style.overflow = 'hidden'
            const sectionInsidePopup = popup.getElementsByClassName(section.className)[0]
            sectionInsidePopup.addEventListener('click', () => {
                popup.style.display = 'none'
                document.body.style.overflow = ''
            })
        });
    }
}