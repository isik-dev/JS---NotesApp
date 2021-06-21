console.log(uuidv4());
// Get saved notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save new items into the localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note by it UUID
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate new DOM 'p' for each new note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const buttonEl = document.createElement('button')

    // Setup remove button 
    buttonEl.textContent = 'X'
    noteEl.appendChild(buttonEl)
    buttonEl.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

        // Setup note text
        if (note.title.length > 0) {
            textEl.textContent = note.title
        } else {
            textEl.textContent = 'unnamed note'
        }
        noteEl.appendChild(textEl)
        textEl.setAttribute('href', `/edit.html#${note.id}`)
        

        return noteEl

}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        document.querySelector('#notes').appendChild(generateNoteDOM(note))
    })
}