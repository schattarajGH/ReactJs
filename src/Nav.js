import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from "react-router-dom";
import * as Feather from "react-feather";
import './app.scss';
import './index.css';
import {useState,useEffect,useContext} from 'react';
import noteContext from './noteContext';
import * as ReactBootstrap from 'react-bootstrap';

// import Navbar from 'react-bootstrap/Navbar';
// import {Container,Form,FormControl,NavDropdown,Button} from 'react-bootstrap';
export default function Nav(props){
    const[CheckToken,setCheckToken]=useState(false);
    const a = useContext(noteContext);
    // console.log(a);
    useEffect(() => {
        let lt=localStorage.getItem("token");
        if(lt==null){
            setCheckToken(false);
        }
        else{
            setCheckToken(true);
        }
    }, [])
    
    // const [hovered,setHovered] = useState(false);
    // const toggleHover = ()=>setHovered(!hovered);
//    function func(value){
//     //    document.getElementById("btn").classList.add("addddd");
//     console.log(value);
//    }
return(
    <>
    <header>
      <div className="nav_area">
        <ReactBootstrap.Container>
<ReactBootstrap.Navbar expand="lg">
<ReactBootstrap.Navbar.Brand className="logo" to="/index.html"><h3>blog</h3></ReactBootstrap.Navbar.Brand>
<ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
<ReactBootstrap.Navbar.Collapse id="navbarScroll">
<ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            </li>
                          
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                            </li>
                           
                            <li className="nav-item">
                            {a.show ? <NavLink className="btn" to="/admin"><Feather.User></Feather.User></NavLink> :
                                <NavLink className="btn" to="/login">Login / Sign Up</NavLink>
                            }
                            </li>
               
                          {/* <button className={hovered ? 'pulse' : ""} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Click me</button> */}
                       
                        </ul>
                        
</ReactBootstrap.Navbar.Collapse>

</ReactBootstrap.Navbar>
</ReactBootstrap.Container>
</div>
</header>
<Outlet/>
</>
);
}
