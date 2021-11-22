import {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { Navigate} from 'react-router-dom';
export default function Admin(){
 const token = localStorage.getItem("token");
 const [checkToken,setcheckToken] = useState(token);
//  const [fetcha,setfetcha] = useState(false);
 const [result,setresult] = useState(null);
 if(token==null){
    return <Navigate to="/login"></Navigate>;
 }
 function logout(){
     localStorage.removeItem("token");  
     setcheckToken(null);
     if(checkToken==null){
        return <Navigate to="/login"></Navigate>;
     }
 }
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
    fetch("https://allnewsfeed.000webhostapp.com/singlepage/userdata.php",{
        method:"POST",
        body:token,
        header:{
            'Content-Type':"application/json",
        }
      }
      ).then(function(response){
        return response.json();
      }).then(function(result){
         console.log(result);
         setresult(result);
        //  setfetcha(true);
        // let r =JSON.parse(token)
        }
      )
        }
        ,[]);
    return(
        <>
        <h1>This is admin page</h1>
        
        <button onClick={logout} className="btn-success">Logout</button>
        </>
    )
}