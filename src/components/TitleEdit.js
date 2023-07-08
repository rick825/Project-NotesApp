import React,{useState} from 'react';
import './TitleEdit.css';

const TitleEdit = ({onSubmit}) => {
    
    const [title, setTitle] = useState('');
    const [message,setmessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title.trim().length !== 0){
            onSubmit(title);
            setmessage("Submitted!");
        }else{
            setmessage("Please enter title!!");
        }
    }

  return (
    <div className='t-edit'>
      <form className='t-editform'>
       <input type="text" 
           placeholder={'Enter new Title'}
           value={title}
           onChange={(e) => setTitle(e.target.value)}
       />
       <button className='btn' onClick={handleSubmit}>Submit</button>
       <div className="message">
       <h2>{message}</h2>
      </div>      
       </form>
     
    </div>
  )
}

export default TitleEdit