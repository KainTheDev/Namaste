const box = document.getElementsByClassName('box').item(0)
fetch('json/works.json').then(async response => {
    const data = (await response.json()).sort((a, b) => new Number(b.creationYear) - new Number(a.creationYear));
    for (const work of data) {
        const imageButton = document.createElement('button');
        imageButton.className = 'imageButton';
        imageButton.onclick = () => setTimeout(() => window.open(work.link, '_blank'), 500);
        imageButton.style.setProperty('--preview-image', `url('${work.backgroundImage}')`);

        const h1 = document.createElement('h1');
        h1.textContent = work.name;

        const h2 = document.createElement('h2');
        h2.innerHTML = `${work.description}. <span class='highlight'><br>Creation year: <span class='highlight important'>${work.creationYear}</span>.</span>`;

        imageButton.appendChild(h1);
        imageButton.appendChild(h2);
        box.insertBefore(imageButton, box.firstChild)
    }
})