import React from "react";
import {Link} from "react-router-dom";
import {Redirect,Route} from "react-router-dom";
import {useState,useContext} from "react";
import noteContext from './noteContext';
import { Repeat, Target } from "react-feather";
import { Navigate} from 'react-router-dom';
export default function Loginregister(props){
    let form = document.getElementById("formsection");
    const[CheckToken,setCheckToken]=useState(true);
    const a = useContext(noteContext);
     console.log(a);
    // setCheckToken(false);
    const [Active, setActive] = useState(false);
    const [Data, setData] = useState({
        email:"",
        pass:""
    });
    const [RegisterData, setRegisterData] = useState({
     name:"",
     email:"",
     pass:"",
     passRepeat:""
  });
    const [Error,setError] = useState(null);
    const [RegisterError,setRegisterError] = useState(null);
    const[Logedin,setLogedin]=useState(false);
    function login(){
        setActive(false);
    }
    function register(){
    setActive(true);
        }
        function handle(e){
            Data[e.target.id]=e.target.value;
        }
        function submit(e){
            e.preventDefault();
            let myjson = JSON.stringify(Data);            
            fetch("https://allnewsfeed.000webhostapp.com/singlepage/json.php",{
    method:"POST",
    body:myjson,
    header:{
      'Content-Type':"application/json",
    },
  }
  ).then(function(response){
    return response.json();
  }).then(function(result){
    if(result['status']){
      a.showUpdate();
      setError(result['data']['username']);
      console.log(result);
      let tokendata = JSON.stringify(result['data']);
      setLogedin(true);
      // console.log(result);
      localStorage.setItem("token",tokendata);   
    }
    else{
      console.log(result);
      setError(result['error']);
    }
    // console.log(myjson);
  });
        };
          //insert data for Register
          function registerinput(e){
            RegisterData[e.target.name]=e.target.value;
            setRegisterError(null);
          }
          ////////Register User
          function registersubmit(e){
            e.preventDefault();
            // console.log(RegisterData);
            let registerjson = JSON.stringify(RegisterData);
            fetch("https://allnewsfeed.000webhostapp.com/singlepage/add.php",{
              method:"POST",
              body:registerjson,
              header:{
                'Content-Type':"application/json",
              },
            }
            ).then(function(response){
              return response.json();
            }).then(function(result){
              if(result['status']){
                setRegisterError(result['error']);
                console.log(result);
                setCheckToken(true);
              }
              else{
                console.log(result);
                setRegisterError(result['error']);
              }           
            });
          }
        if(Logedin){
        return <Navigate to="/admin"></Navigate>;
        }
    
        const token = localStorage.getItem("token");
        // eslint-disable-next-line eqeqeq
        if(token===null){
          console.log("token not found");
        }
        else{
          console.log("ok");     
          return <Navigate to="/admin"></Navigate>;
        }  
return(
    <>
    <div className="form-area">
    <div className="container">
        <div className="row">
            <div className={Active?'col-lg-6 col-md-10 mx-auto register': 'col-lg-6 col-md-10 mx-auto login'} id="formsection">
                <h3><Link to="#" onClick={login} className="lg">Login</Link><Link to="#" className="rg" onClick={register}>Register</Link></h3>
    <div className="form login">
        <form onSubmit={(e) =>submit(e)}>
          <h5>{Error}</h5>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="example@gmail.com" name="email" onChange={handle}/>
              
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="pass" placeholder="*****************" onChange={handle}/>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <span className="checkmark"></span>
              Remember Me</label>
              <Link to="#">Forgot password ?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <h5>Or</h5>
            <Link to="#" onClick={register} className="link">Do not have an account ?</Link>
          </form>
    </div>
    <div className="form register">
        <form onSubmit={(e) =>registersubmit(e)}>
        <h5>{RegisterError}</h5>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputname">Name</label>
                  <input type="text" className="form-control" placeholder="Morger" onChange={registerinput} name="name"/>
                </div>
                
              </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" onChange={registerinput} name="email"/>
              
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" placeholder="*****************"  onChange={registerinput} name="pass"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Reapeat Password</label>
              <input type="password" className="form-control" placeholder="*****************" onChange={registerinput} name="passRepeat"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
              <label className="form-check-label mb-0" htmlFor="exampleCheck2">By registering you are agree to the <Link to="#">Terms of Service</Link> and <Link to="">Privacy Poloicy</Link></label>
              <span className="checkmark"></span>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <h5>Or</h5>
            <Link to="#" onClick={login} className="link">Already have an account ?</Link>
          </form>
    </div>
</div>
</div>
</div>
</div>
    </>
)
}
