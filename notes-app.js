// const notes = [{
//     title: 'My next trip',
//     body: 'I would like to go to Switzerland'
// }, {
//     title: 'Habits to work on',
//     body: 'Exercise. Eating a bit better'
// }, {
//     title: 'Office modifications',
//     body: 'Get a new seat'
// }]

// // const filters = {
// //     searchText: ''
// // }

// // const renderNotes = function (notes, filters) {
// //     const filteredNotes = notes.filter(function (note) {
// //         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
// //     })

// //     document.querySelector('#notes').innerHTML = ''

// //     filteredNotes.forEach(function (note) {
// //         const noteEl = document.createElement('p')
// //         noteEl.textContent = note.title
// //         document.querySelector('#notes').appendChild(noteEl)
// //     })
// // }

// // renderNotes(notes, filters)

// const filters = {
//     searchText: ''
// }

// const renderNotes = function (notes, filters) {
//     const filteredNotes = notes.filter(function (note) {
//         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
//     })
    
//     document.querySelector('#notes').innerHTML = ''

//     filteredNotes.forEach(function (note) {
//         const noteEl = document.createElement('p')
//         noteEl.textContent = note.title
//         document.querySelector('#notes').appendChild(noteEl)
//     })
// }

// renderNotes(notes, )

// document.querySelector('#create-note').addEventListener('click', function (e) {
//     e.target.textContent = 'The button was clicked'
// })

// document.querySelector('#remove-all').addEventListener('click', function (e) {
//     document.querySelectorAll('.note').forEach(function (item, index) {
//         item.remove()
//     })
// })

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value
//     renderNotes(notes, filters)
// })

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Switzerland'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (item, index) {
        return item.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (item, index) {
        const noteEl = document.createElement('p')
        noteEl.textContent = item.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}



renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log('Button was clicked')
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    console.log('remove button was activated')
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})