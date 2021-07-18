'use strict'

const noteTitle = document.querySelector('#note-title')
const lastEdited = document.querySelector('#last-edited')
const noteBody = document.querySelector('#note-text')
const removeButton = document.querySelector('#remove-note')

const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteID)

if (!note) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
lastEdited.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = generateLastEdited()
    saveNotes(notes)
})

noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeButton.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteID)

        if (!note) {
            location.assign('/index.html')
        }

        noteTitle.value = note.title
        noteBody.value = note.body
        lastEdited.textContent = generateLastEdited(note.updatedAt)
        
    }
})

