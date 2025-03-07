import {useEffect,useState} from 'react';
import db from '../appwrite/databases';
import NoteForm from '../compononets/NoteForm';
import { Query } from 'appwrite';
import Note from '../compononets/Note';
import ThemeOptions from '../compononets/ThemeOptions';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        init();
    }, []);
    const init = async () => { 
   
        const response = await db.notes.list(
          [  Query.orderDesc('$createdAt')]
        );

        setNotes(response.documents);
    
    }
  return (
    <div>
       <div>
                <h1>✍️ My Todo List</h1>
            </div>
            <div className="theme-options">
                <ThemeOptions theme="light" />
                <ThemeOptions theme="dark" />
                <ThemeOptions theme="purple" />
            </div>

        <NoteForm setNotes={setNotes} />
        <div>
            {notes.map((note) => (
              <Note noteData={note} setNotes={setNotes} key={note.$id} />
            ))}
               
        </div>
    </div>
  )
}
