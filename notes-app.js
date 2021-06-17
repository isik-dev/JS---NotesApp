const notes = [
    {
        title: 'my next trip',
        body: 'i would like to go to busan'
    },
    {
        title: 'habits to work on',
        body: 'exercise'
    }, 
    {
        title: 'office modidication',
        body: 'get a new seat'
    }
]

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.notes').forEach(function (item, index) {
        item.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})