import React from 'react';
import db from '../appwrite/databases';

export default function NoteForm({setNotes}) {
    const handleAdd = async (e) =>{
       e.preventDefault();
        const noteBody = e.target.body.value;
        if (noteBody==="") return;

        try{
                const payload = {body: noteBody};

                const response = await db.notes.create(payload);
                setNotes((prevNotes) => [response,...prevNotes]);
                e.target.reset();
                
        }
        catch(err){
            console.error(err);

        }
    }
  return (
<form onSubmit={handleAdd} id="todo-form">
    <input type='tex'
    name='body'
    placeholder="🤔 What's on the agenda?"/>
</form>
  )
}
