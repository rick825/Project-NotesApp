import React from 'react';
import './Notes.css';
import note from './images/note.png';
import del from './images/delete.png';


const Notes = ({onDelete,noteid,notetitle,notedate}) => {
   
    console.log("This is Notes->"+notetitle);
   
    const handleDelete = (id) =>{
    console.log("handle ---> "+id);
    onDelete(id);
    }

  return (
      <div className="note">
      <div className="div1">
      <div className="noteimg">
        <img src={note} alt="note" />
      </div>
       <div className="notemain">
           <h2>{notetitle}</h2>
           <h3>{notedate}</h3>
    </div>
    </div>
    <div className="div2">
    <div className="delimg">
        <img src={del} alt="delete" onClick={() => handleDelete(noteid)}/>
    </div>
    </div>
      </div>
  )
}

export default Notes