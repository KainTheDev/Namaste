const loadingScreen = document.getElementById('BLUR_BG')
document.body.style.overflow = 'hidden'
setTimeout(() => loadingScreen.style.display = 'none', 700)
fetch('/api/load_data?file=links', {
    headers: {
        authorization: '15092020'
    }
}).then(async (response) => {
    const data = await response.json()
    loadingScreen.style.opacity = 0
    document.body.style.overflow = ''
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