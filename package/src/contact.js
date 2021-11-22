import InnerBanner from "./innerBanner";
export default function Contact(){
    return(
        <>
        <InnerBanner name="Contact Us"/>
        <div className="contact">
    <div className="container">
        <div className="row">
<div className="col-lg-8 left">
    <div className="form">
        
            <h3>Send Us a Message</h3>
        
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Your Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Morger Dior"/>
                        
                      </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">your email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputMessage1">Message</label>
                        <textarea name="Message" className="form-control" id="exampleInputMessage1"></textarea>
                      </div>
                      
                    <button type="submit" className="btn">Send Message</button>
                  </form>
             
   
    </div>
</div>
<div className="col-lg-4 right">
    <div className="info">
            <div className="top">
                <h3>Contact Information</h3>
                <ul>
                    <li>
                        <i data-feather="map-pin"></i><span>Pakis Kember Street, Malang City Hardcore</span>
                    </li>
                    <li>
                        <i data-feather="mail"></i><span>example@gmail.com</span>
                    </li>
                    <li>
                        <i data-feather="phone"></i><span>01 123 111 22200</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <h4>Follow Us</h4>
                <div className="social">
                    <a href="#"><i data-feather="instagram"></i></a>
                    <a href="#"><i data-feather="facebook"></i></a>
                    <a href="#"><i data-feather="twitter"></i></a>
                    <a href="#"><i data-feather="linkedin"></i></a>
                </div>
            
       
    
    </div>
    </div>
</div>
        </div>
    </div>
</div>
        </>
    )
}