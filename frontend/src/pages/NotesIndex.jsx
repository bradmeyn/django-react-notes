import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';

const NotesIndex = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/');
    let data = await response.json();

    setNotes(data);
  };

  return (
    <div>
      <ul className='notes__list'>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default NotesIndex;
