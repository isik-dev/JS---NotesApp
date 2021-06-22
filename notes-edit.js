// 1. Add a DOM element between the title and the body inputs (empty span)
// 2. Set text value: Last edited 4 hours ago
// 3. Update value on title/body/storage change



const noteTitle = document.querySelector('#note-title')
const lastEdited = document.querySelector('#last-edited')
const noteBody = document.querySelector('#note-text')
const removeButton = document.querySelector('#remove-note')

const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteID
})

if (note === undefined) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
lastEdited.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = generateLastEdited()
    saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeButton.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteID
        })

        if (note === undefined) {
            location.assign('/index.html')
        }

        noteTitle.value = note.title
        noteBody.value = note.body
        lastEdited.textContent = generateLastEdited(note.updatedAt)
        
    }
})

