import {Link} from "react-router-dom";
import InnerBanner from "./innerBanner";
import { Play } from 'react-feather';
import { useEffect } from 'react';

export default function About(){
    useEffect(() => {
        let url = window.location.href;
    let menuItem=document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    for(let i = 0; i<menuItem.length;i++){
        console.log("hhhh")
        if(url===menuItem[i].href){
            menuItem[i].parentElement.classList.add("active");
        }
        else{
            menuItem[i].parentElement.classList.remove("active");
        }
    }
      },[]);
    return(
        <>
        <InnerBanner name="About Us"/>
<div className="about-page">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
                <div className="text">
                    <h3>who we are</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                </div>
            </div>
            <div className="col-lg-7 col-md-6">
<div className="img">
    <img src="assets/images/about-page.jpg" alt=""/>
</div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="vdo image">
                    <Link to="/">
                    <div className="play">
                    <Play/>
                     </div>
                    <img src="assets/images/about.jpg" alt=""/>
        </Link> 
              </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}