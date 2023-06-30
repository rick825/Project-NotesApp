import React,{useState} from 'react';
import './Main.css';
import Notes from './Notes';
import add from './images/add.png';
import edit from './images/edit.png';
import Content from './Content';

const Main = () => {

    const notes = [
        {id:1,
         title:"What is React? ",
        content:"React is a JavaScript library that aims to simplify development of visual interfaces.",
        // date:"28/04/2023"
        },
        {
         id:2,
         title:"What is Java?",
         content:"Java is a most popular, object-oriented, widely used programming language and platform that is utilized for Android development, web development, artificial intelligence, cloud applications, and much more.",
        //  date:"28/04/2023"
        }
    ]
    const [mynote, setNote] = useState(notes);
    const [isActive,setisActive] = useState([]);
  
    const handleClick = (id) =>{
       setisActive(id);
        console.log("running"+id);
    }

    const changeHandler = (id) =>{
        console.log("Handling Save"+id);
    }

  return (
    <div className='main'>

     <div className="leftnote note-cont">
        
      <div className="addnotebtn btn">
        <img src={add} alt="Add" />
        <button>Add Note</button>
      </div>
      <div className="notes">
      { 
        mynote.map((obj)=>{
            return( <div  key={obj.id}  onClick={() => handleClick(obj.id)} className={`notes ${isActive === obj.id ? 'active':'inactive'}`}>
            <Notes notetitle = {obj.title} notedate={obj.date} />
            </div>    
            )
        })
           
      } 
      </div>   
     </div>

    <div className="rightnote note-cont">
      <div className="contents">
      {
        mynote.map((obj)=>{
            return (
                <div className={`conts ${isActive === obj.id ? 'cont-active':'cont-inactive'}`} key={obj.id}>
                <div className="ccont" >
                <div className="ctitle">
                <div className='titlediv'>
                 <h3>{obj.title}</h3>
                </div> 
                 <div className="editdiv">
                 <img src={edit} alt="" className='edit-img'/>
                 </div>
                 </div>
                 <div className="cbtn">
                 <button onClick={() => changeHandler(obj.id)}>Save</button>
                 </div>
                </div>
                <div className="con">
                <Content notecontent = {obj.content} noteid={obj.id}/>
                </div>
                </div>
            )
        })
      }
      </div> 
        </div>

    </div>
  )
}

export default Main