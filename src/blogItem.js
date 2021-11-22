import {Link} from "react-router-dom";
import * as Feather from "react-feather";
import { Play } from 'react-feather';

export default function BlogItem(info){
    
return(
    <>
    <div className="card">
    <div className="image">
        <img src={info.imgSrc} alt=""/>

         <div className="play">
             <Play/>
         </div>
        
    </div>
    <div className="text">
        <h3><Link to="#">{info.title}</Link></h3>
        <span>{info.date}</span>
        <p>{info.para}</p>
        <Link to="#" className="btn">Read More</Link>
        <div className="actions">
            <div className="left">
                <span>1 <Feather.Heart/></span> 
                <span>2  <Feather.MessageSquare/></span>
            </div>
            <div className="right"> 
                <span>Share on: </span> 
                <Link to="/"><Feather.Instagram/></Link>
                 <Link to="/"><Feather.Facebook/></Link>
                <Link to="/"><Feather.Twitter/></Link>
                <Link to="/"><Feather.Linkedin/></Link>
        </div>
    </div>
</div>
</div>

    </>
)
}