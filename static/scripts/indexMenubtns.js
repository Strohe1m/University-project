const helpNode = document.querySelector('.help')
const aboutNode = document.querySelector('.about')

helpNode.addEventListener('click', function() {
    throwFetch('help')
})

aboutNode.addEventListener('click', function() {
    throwFetch('about')
})


function throwFetch(url) {
    fetch(`/${url}`, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok)
            throw new Error(response.status)
        return response.text()
    })
    .then (data => {
        if (url === 'help') window.location.href = '/help'
        if (url === 'about') window.location.href = '/about'
    })
    .catch(err => console.log(err))
    
}

