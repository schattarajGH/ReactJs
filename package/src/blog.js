import InnerBanner from "./innerBanner";
import { useEffect } from 'react';
export default function Blog(){
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
  },[]);
    return(
<>
<InnerBanner name="Blogs"/>
</>
    )
}