// Read existing notes from localStorage
const getSavedNotes = function () {
    const noteJSON = localStorage.getItem('notes')

    if (noteJSON !== null) {
        return JSON.parse(noteJSON)
    } else {
        return []
    }
    }

// Remove a note from the list 
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (item) {
        return item.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (item) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function (e) {
        removeNote(item.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

        // Setup the note tite text
        if (item.title.length > 0) {
            textEl.textContent = item.title
        } else {
            textEl.textContent = 'unnamed note'
        }

        noteEl.appendChild(textEl)

        return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (item, index) {
        return item.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (item) {
        const noteEl = generateNoteDOM(item)
        document.querySelector('#notes').appendChild(noteEl)
    })

}

// Save notes in localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}