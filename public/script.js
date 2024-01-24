const links = [
    {
        name: 'TikTok',
        url_name: '@nguyen.thien.nam.2009',
        url: 'https://www.tiktok.com/@nguyen.thien.nam.2009'
    },
    {
        name: 'Discord',
        url_name: 'nguyen.thien.nam',
        url: 'https://discord.com/users/1059384621550288907'
    },
    {
        name: 'Instagram',
        url_name: 'nguyen.thien.nam2009',
        url: 'https://www.instagram.com/nguyen.thien.nam2009'
    },
    {
        name: 'Twitter',
        url_name: '@thien_nam9',
        url: 'https://twitter.com/thien_nam9'
    },
    {
        name: 'Youtube',
        url_name: '@nguyen_thien_nam',
        url: 'https://www.youtube.com/channel/UCuBqPJLikRQ5ILmeGfouvGA'
    }
].sort()

const linksList = document.getElementById('links')
linksList.innerHTML = links.map(link => {
    return `<span> ${link.name}: <a onclick="window.open('${link.url}', '_blank')">${link.url_name}</a></span>`
}).join("<br>")