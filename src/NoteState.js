import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1={
        "name":"sc",
        "class":"5b"
    }
    const [state, setstate] = useState(s1);
   const update = ()=>{ 
        setTimeout(()=>{
            setstate({"name":"laassdas",
            "class":"6bg"})
        },10000);
    }
      const [show,setShow] = useState(false);
    function showUpdate(){
        if(show){
            setShow(false);
        }
        else{
            setShow(true);
        }
        console.log("hello")
    }
    return(
        <NoteContext.Provider value={{state,update,show,showUpdate}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;