// Get saved notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return notesJSON !== null ? JSON.parse(notesJSON) : []

    // if (notesJSON !== null) {
    //     return JSON.parse(notesJSON)
    // } else {
    //     return []
    // }
}
 
// Save new items into the localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note by it UUID
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate new DOM 'p' for each new note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const buttonEl = document.createElement('button')

    // Setup remove button 
    buttonEl.textContent = 'X'
    noteEl.appendChild(buttonEl)
    buttonEl.addEventListener('click', () => {
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

// Sort notes array by one of three ways:
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}


// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        document.querySelector('#notes').appendChild(generateNoteDOM(note))
    })
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited: ${moment(timestamp).fromNow()}` 