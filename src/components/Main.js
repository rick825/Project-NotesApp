import React,{useState} from 'react';
import './Main.css';
import Notes from './Notes';
import add from './images/add.png';
import edit from './images/edit.png';
import Content from './Content';
import TitleEdit from './TitleEdit';
import cross from './images/cross.png';

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
    const [isTrans,setisTrans] = useState(true);
    const [title,setTitle] = useState("");
    const [show,setShow] = useState([]);
    const [backBlack,setbackblack] = useState([]);
    const [isNav,setisNav] = useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("--->"+title);
      if(title.trim().length !== 0){
      const new_data = {
        id:Math.random(),
        title: title,
        content : "Content here..."
      }
      setNote([...mynote,new_data]);
    }else{
      alert('Please enter note');
    } 
    }

    const editTitle = (id,tinput)=>{
      setNote(mynote.map(obj =>{
          if(obj['id'] === id){
            return {...obj,title:tinput}
          }else{
            return obj;
          }
      }))
     }
    
    const navActive = () =>{
   setisNav(curr => !curr);
    }
  
    const handleClick = (id) =>{
       setisActive(id);
        console.log("running"+id);
    }

    const handleAdd = () =>{
      setisTrans(curr => !curr);
    }

    const pullcontent = (id,plnote) =>{
      console.log("pull Content for->"+id+"..."+plnote);
      setNote(mynote.map(obj =>{
        if( obj['id'] === parseInt(id)){
          return {...obj,content:plnote}
        }else{
          return obj;
        }
      }));
    }

    const handleDelete = (id) =>{
      console.log("handle ---> "+id);
      setNote(mynote.filter((currElm)=>{
        return currElm.id !== id;
    }))
    }

    const handleEdit = (id) =>{
      if(show.includes(id)){
        setShow(show.filter(i=>i !== id));
        console.log("ID->"+id);
      }else{
        setShow([...show,id])
      }

      if(backBlack.includes(id)){
        setbackblack(backBlack.filter(i=>i !== id))
      }else{
        setbackblack([...backBlack,id]);
      }

   
   }

   const handleClose = (id) =>{
    if(backBlack.includes(id)){
    setbackblack(backBlack.filter(i =>i !== id ));
    setShow(show.filter(i=>i !== id));
    }
   }

   

  return (
    <div className='main'>

     <div className={`leftnote note-cont ${isNav ? 'navshow':''}`}>
        
      <div className="addnotebtn btn" onClick={() =>handleAdd()}>
        <img src={add} alt="Add" />
        <button>Add Note</button>
      </div>

      <div className={`inputValue ${isTrans ? 'ip-active': 'ip-inactive' }`}>
      <form >
      <input type="text" placeholder={"Enter your notes title here"}  value={title}
      onChange={(e) => setTitle(e.target.value)} />
      <button className='btn' onClick={handleSubmit}>Submit</button>
      </form>
      </div>

     <div className={`notesdiv ${isTrans ? '': 'trans-note'}`}>
      <div className={`notes`} >
      { 
        mynote.map((obj)=>{
            return( <div  key={obj.id}  onClick={() => handleClick(obj.id)} className={`notes ${isActive === obj.id ? 'active':'inactive'}`}>
            <Notes notetitle = {obj.title} notedate={obj.date} noteid={obj.id} onDelete={(id)=>handleDelete(id)}/>
            </div>    
            )
        })     
      } 
      </div> 

      </div> 

     </div>

 <div className="rightnote note-cont">

    <div className="nav" onClick={navActive}>
    <div className="icon nav-icon-2" >
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
      <span style={{backgroundColor : isNav ? 'white':'black'}}></span>
   </div>
  </div>

      <div className="contents">
      {
        mynote.map((obj)=>{
            return (
         <div className={`conts ${isActive === obj.id ? 'cont-active':'cont-inactive'}`} key={obj.id}>
           
         <div className='titleedit' style={{transform: show.includes(obj.id) ? 'translateY(30rem)' : 'translateY(-20rem)',opacity: show.includes(obj.id) ? 1: 0,visibility: show.includes(obj.id) ? 'hidden':'visible'}}>
              <TitleEdit  onSubmit={(input)=>editTitle(obj.id,input)}/>
        </div>

        <div className="close" onClick={() => handleClose(obj.id)}>
         <img src={cross} alt="" />
         </div> 
          <div className="ccont" >
                   <div className="ctitle">
                    <div className='titlediv'>
                      <h3>{obj.title}</h3>
                 </div> 
                  <div className="editdiv" onClick={()=>handleEdit(obj.id)}>
                       <img src={edit} alt="" className='edit-img'/>
                  </div>
                 </div>
           </div>
           <div className="con">
           <div className={`backblack`} style={{opacity: backBlack.includes(obj.id) ? 0.9: 0,visibility: backBlack.includes(obj.id) ? 'visible':'hidden'}}></div>
                <Content notecontent = {obj.content} noteid={obj.id} onCh={(pullednote) => pullcontent(obj.id,pullednote)}/>
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