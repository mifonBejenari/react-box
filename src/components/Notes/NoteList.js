import React, { useState, useEffect } from 'react';
import Note from './Note';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect (() => {
    fetch('http://localhost:3001/notes')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setNotes(data.notes);
      })
  }, [])

  return (
    <div>
      <h3>Notes</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note noteData={note}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NoteList;
