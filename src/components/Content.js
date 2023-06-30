import React from 'react';
import './Content.css';

const Content = ({notecontent,noteid}) => {
  return (
    <div className="content">
      <textarea name="" id={noteid} value={notecontent} cols="164" rows="48" ></textarea>
    </div>
  )
}

export default Content;  