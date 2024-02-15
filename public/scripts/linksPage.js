const loadingScreen = document.getElementById('BLUR_BG')
const title = document.getElementsByClassName('title').item(0)
const box = document.getElementsByClassName('box').item(0)
setTimeout(() => loadData({ box, fileName: 'social media' }), 500)
const titles = ["social media", 'communities', 'pages']

function loadData({ box, fileName }) {
    fetch(`/api/load_data?file=${fileName.split(' ').join('_')}`).then(async (response) => {
        loadingScreen.style.opacity = 0
        document.body.style.overflow = ''
        setTimeout(() => loadingScreen.style.display = 'none', 500)
        const data = await response.json()
        box.style.opacity = 1
        const links = data.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })

        const linksList = document.getElementById('links')
        links.forEach((link, index) => {
            const imageURL = links[index].logoURL
            linksList.innerHTML += `
        <div 
            class="link-card" 
            id="lc-${index}" 
            onclick="window.open('${link.url}', '_blank')" 
            onmouseover="editLinkCard('${link.name}', '${index}', true)" 
            onmouseout="editLinkCard('${link.url_name}', '${index}', false)"
            style='background-image: url("${imageURL}")'>
        <h1 
            class='link-title' 
            id='lk-${index}'>${link.url_name}
        </h1>
        </div>`
        })
    })
}
const switchButton = document.getElementsByClassName('secondary')

function disableButton(button) {
    button.style.cursor = 'not-allowed';
    button.style.opacity = '0.2';
    button.disabled = true;
    button.style.pointerEvents = 'none';
}

function enableButton(button) {
    button.style.cursor = 'pointer';
    button.style.opacity = '1';
    button.disabled = false;
    button.style.pointerEvents = '';
}

for (const button of switchButton) {
    if (button.innerText === title.innerText) disableButton(button);
    button.addEventListener('click', () => {
        box.style.opacity = 0
        setTimeout(() => {
            new Array(...switchButton).forEach(enableButton)
            button.style.transition = '0s'
            document.getElementById('links').innerHTML = ''
            disableButton(button)
            title.innerText = button.innerText
            loadData({ box, fileName: button.innerText })
            const usedTitle = titles.shift()
            titles.push(usedTitle)
        }, 400)
    })
}

function editLinkCard(string, index, condition) {
    const linkTitle = document.getElementById(`lk-${index}`)
    const linkCard = document.getElementById(`lc-${index}`)
    if (condition) {
        linkCard.style.backgroundSize = '300px'
        linkCard.style.backgroundPosition = 'center'
        condition = false
    } else {
        linkCard.style.backgroundColor = ''
        linkCard.style.backgroundSize = '100px'
        linkCard.style.backgroundPosition = 'center 15px'
        condition = true
    }
    linkTitle.innerText = string
}