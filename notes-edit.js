const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-text')
const removeButton = document.querySelector('#remove-note')

const noteID = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteID
})

if (note === undefined) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeButton.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

// 1. Setup input event for title
// 2. Update note object and save notes list
// 3. Repeat steps 1-2 for body
// 4. Setup a remove button that removes notes and sends users back to home page