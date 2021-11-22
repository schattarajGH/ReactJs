import {Link} from "react-router-dom";
export default function InnerBanner(props){
    return(
        <>
        <div className="inner-banner">
<div className="top pattern">
    <img src="assets/images/bannerbg.svg" alt=""/>
</div>
    <div className="container">
        <h3>{props.name}</h3>
      
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{props.name}</li>
            </ol>
          </nav>
    </div>
<div className="bottom pattern">
    <img src="assets/images/bannerbg.svg" alt=""/>
</div>
</div>
        </>
    )
}