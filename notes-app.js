let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters )
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).toString())

// 1. Create a new moment 
// 2. Set the month, day, and year to your birthday
// 3. Use format to print it in the following way: Jan 6, 1991

const newMoment = moment()
newMoment.month(2).date(14).year(1996)
console.log(newMoment.format('MMM D, YYYY'))
