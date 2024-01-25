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
    },
    {
        name: 'Facebook',
        url_name: 'thiennam.nguyen.18007',
        url: 'https://www.facebook.com/thiennam.nguyen.18007'
    },
    {
        name: 'Reddit',
        url_name: 'Turbulent-Ad-759',
        url: 'https://www.reddit.com/user/Turbulent-Ad-759'
    },
    {
        name: 'Github',
        url_name: 'NamTheDev',
        url: 'https://github.com/NamTheDev'
    },
    {
        name: 'Gravatar',
        url_name: 'nguyenthiennam2009',
        url: 'https://gravatar.com/nguyenthiennam2009'
    },
    {
        name: 'NPM',
        url_name: 'soul_yt',
        url: 'https://www.npmjs.com/~soul_yt'
    }
].sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
})

const linksList = document.getElementById('links')
linksList.innerHTML = links.map(link => {
    return `<span> ${link.name}: <a onclick="window.open('${link.url}', '_blank')">${link.url_name}</a></span>`
}).join("<br>")