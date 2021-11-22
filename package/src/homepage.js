import {Link} from "react-router-dom";
import BlogItem from "./blogItem";
import { useEffect } from "react";
import * as Feather from "react-feather";
// import { getData } from "./items";
import { useState } from "react";
export default function Homepage(){
    const [getdatas, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [defibs, setDefibs] = useState([]);
    // let getdatas = getData();
    useEffect(() => {
        let url = window.location.href;
    let menuItem=document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    for(let i = 0; i<menuItem.length;i++){
        if(url===menuItem[i].href){
            menuItem[i].parentElement.classList.add("active");
        }
        else{
            menuItem[i].parentElement.classList.remove("active");
        }
    }

    fetch("https://allnewsfeed.000webhostapp.com/api/fetch.php")
    .then(res => res.json())
    .then(
        (result) => {
            setDefibs(result.defibs);
         console.log(result);
            setItems(result);
          },
          (error) => {
         console.log("error");
          }
    )
      },[]);
    
    return(
        defibs?
        <BlogItem/>:
<div>
<div className="banner">
<div className="container">
    <div className="content">
        <div className="left">
            <h3>Let people read up on your amazing adventure</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <form>
                <div className="cta">
                <input type="text" placeholder="Enter your email"/>
                <button className="btn">Subscribe</button>
            </div>
            </form>
        </div>
        <div className="right">
            <div className="image">
                <img src="assets/images/banner.png" alt=""/>
            </div>
        </div>
    </div>
</div>
</div>
<div className="blog-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="left">
                    <h3 className="head">Recent Posts</h3>
                    {getdatas.map(getdata => (
                        // <BlogItem imgSrc={`assets/images/${getdata.img}`} title={`${getdata.title}`} date={`${getdata.date}`} para={`${getdata.para}`} type={`${getdata.type}`} key={getdata.id}/>
<BlogItem imgSrc={`${getdata.image}`} title={`${getdata.title}`} date={`${getdata.date}`} para={`${getdata.description}`} type={`${getdata.img}`} key={getdata.id}/>
                      ))}
<div className="action"><Link to="/s" className="btn">View More</Link></div>
<h3 className="head">Video Posts</h3>


<div className="action"><Link to="/s" className="btn">View More</Link></div>

                </div>
            </div>
            <div className="col-lg-4">
                <div className="right">
                    <div className="searchArea">
                        <form>
                            <input type="search" placeholder="Search your blog"/>
                            <button><Feather.Search/></button>
                        </form>
                    </div>
                    <h3 className="head">Popular Posts</h3>
                    <ul className="posts">
                        <li>
                            <div className="image">
                                <img src="assets/images/about.jpg" alt=""/>
                            </div>
                            <div className="text">
                                <h4>Check Out My New Video</h4>
                                <p>It is a long established fact that a reader will be distracted by the </p>
                                <div className="left"> <span>1 <Feather.Heart/></span> 
                                    <span>2  <Feather.MessageSquare/></span></div>
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <img src="assets/images/post.webp" alt=""/>
                            </div>
                            <div className="text">
                                <h4>Check Out My New Video</h4>
                                <p>It is a long established fact that a reader will be distracted by the </p>
                                <div className="left"> <span>1 <Feather.Heart/></span> 
                                    <span>2  <Feather.MessageSquare/></span></div>
                            </div>
                        </li>
                    </ul>
                    <h3 className="head">Follow Us</h3>
                    <div className="social">
                        <Link to="/"><Feather.Instagram/></Link>
                        <Link to="/"><Feather.Facebook/></Link>
                        <Link to="/"><Feather.Twitter/></Link>
                        <Link to="/"><Feather.Linkedin/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
 
   
}
