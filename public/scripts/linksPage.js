const loadingScreen = document.getElementById('BLUR_BG');
const title = document.querySelector('.title');
const box = document.querySelector('.box');
const linksList = document.getElementById('links');
const switchButtons = document.querySelectorAll('.secondary');

setTimeout(() => loadData(title.innerText), 500);

switchButtons.forEach(button => {
    if (button.innerText === title.innerText) disableButton(button);
    button.addEventListener('click', () => {
        const newFileName = button.innerText;
        if (newFileName !== title.innerText) {
            box.style.opacity = 0;
            setTimeout(() => {
                switchButtons.forEach(enableButton);
                disableButton(button);
                title.innerText = newFileName;
                loadData(newFileName);
            }, 400);
        }
    });
});

function loadData(fileName) {
    fetch(`json/${fileName.split(' ').join('_')}.json`)
    .then(response => response.json())
    .then(data => {
        loadingScreen.style.opacity = 0;
        document.body.style.overflow = '';
        setTimeout(() => loadingScreen.style.display = 'none', 500);
        box.style.opacity = 1;
        linksList.innerHTML = buildLinksHTML(data);
    });
}

function buildLinksHTML(links) {
    return links.map((link, index) => {
        return `
            <div class="link-card" id="lc-${index}" onclick="window.open('${link.url}', '_blank')"
                onmouseover="editLinkCard('${link.name}', '${index}', true)"
                onmouseout="editLinkCard('${link.url_name}', '${index}', false)"
                style="background-image: url('${link.logoURL}')">
                <h1 class='link-title' id='lk-${index}'>${link.url_name}</h1>
            </div>`;
    }).join('');
}

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

function editLinkCard(string, index, condition) {
    const linkTitle = document.getElementById(`lk-${index}`);
    const linkCard = document.getElementById(`lc-${index}`);
    if (condition) {
        linkCard.style.backgroundSize = '300px';
        linkCard.style.backgroundPosition = 'center';
    } else {
        linkCard.style.backgroundSize = '100px';
        linkCard.style.backgroundPosition = 'center 15px';
    }
    linkTitle.innerText = string;
}
