import React from 'react';

const Note = (props) => {
  return (
    <div>
      <h4>{props.noteData.title}</h4>
      <p>{props.noteData.body}</p>
    </div>
  )
}

export default Note;
