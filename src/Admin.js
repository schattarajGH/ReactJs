import {useState,useEffect,useContext} from "react";
import {Link} from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import noteContext from './noteContext';
export default function Admin(props){
 const token = localStorage.getItem("token");
 const a = useContext(noteContext);
 const [checkToken,setcheckToken] = useState(token);
 const[CheckToken,setCheckToken]=useState(true);//for hiding login button
 useEffect(() => {
     setCheckToken(true);
    //  CheckToken=true;
 }, []);
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
        //  setresult(result);
        //  setfetcha(true);
        // let r =JSON.parse(token)
        }
      )
        }
        ,[]);
 const [fetcha,setfetcha] = useState(false);
    //  setCheckToken(false);

 const [result,setresult] = useState(null);
 if(token==null){
    return <Navigate to="/login"></Navigate>;
 }
 function logout(){
     localStorage.removeItem("token");  
     console.log("asdas");
     setcheckToken(null); 
     setCheckToken(false);
     a.showUpdate();
}
if(checkToken==null){
  return <Navigate to="/login"></Navigate>;
}
return(
        <>
        <div className="admin-page">
        <div className="container">
        <h1>This is admin page</h1>
        <form>
            <div className="form-group">
    <input type="text" name="title" placeholder="Title" className="form-control"/>
    </div>
    <div className="form-group">
    <input type="text" name="description" placeholder="description" className="form-control"/>
    </div>
    <div className="form-group">
<input type="file" name="file" multiple="multiple" className="form-control"/>
</div>
<div className="form-group">
<input type="checkbox" name="base_url" id="check"/>
</div>
<div className="form-group">
<label htmlFor="check">Checked to give server URL to image path!!</label>
</div>
<button className="btn btn-primary">Submit</button>
</form>

<button onClick={logout} className="btn btn-success">Logout</button>
        </div>
        </div>
        
        </>
    )
}