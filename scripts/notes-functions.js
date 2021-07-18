"use strict";

// Get saved notes from localStoragee
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }

  // if (notesJSON !== null) {
  //     return JSON.parse(notesJSON)
  // } else {
  //     return []
  // }
};

// Save new items into the localStorage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Remove note by it UUID
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate new DOM 'p' for each new note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement("a");
  const textEl = document.createElement("p");
  const statusEl = document.createElement("p");

  // Setup note text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "unnamed note";
  }
  textEl.classList.add("list-item__title");
  noteEl.appendChild(textEl);

  // Setup the link
  noteEl.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.classList.add("list-item");

  // Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add("list-item__subtitle");
  noteEl.appendChild(statusEl);
  return noteEl;
};

// Sort notes array by one of three ways:
const sortNotes = (notes, sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// Render application notes
const renderNotes = (notes, filters) => {
  const notesEl = document.querySelector("#notes");
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesEl.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      notesEl.appendChild(generateNoteDOM(note));
    });
  } else {
    const emptyEl = document.createElement("p");
    emptyEl.textContent = "No notes to show";
    emptyEl.classList.add("empty-message");
    notesEl.appendChild(emptyEl);
  }
};

// Generate the last edited message
const generateLastEdited = (timestamp) =>
  `Last edited: ${moment(timestamp).fromNow()}`;
