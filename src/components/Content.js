import React, { useState } from 'react';
import './Content.css';

const Content = ({onCh,notecontent,noteid}) => {

  const [note,setnote] = useState(notecontent);

  const changeHandler = (e) =>{
    setnote(e.target.value);
    onCh(note);
  }

  return (
    <div className="content">
      <textarea name="" id={noteid}  value={note} className="textinput" contentEditable={true} onChange={(e)=>changeHandler(e)} suppressContentEditableWarning={true}/>
      </div>
  )
}

export default Content;  