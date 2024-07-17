import'./index.css'

const Footer = ()=>{
    return (

 
<div id='footer'>

<div id='get-in-touch'>
<h2 className='get'>Get In Touch</h2>
<label for='Your Name'>Your Name</label>
<input name="first name" type="text" placeholder="Your Name" className="input"/>

<label for="Your Email">Your Email</label>
<input name="first name" type="text" placeholder="Enter Email Address" className="input"/>

<label for="Message">Your Message</label>
<input name="message" type="text" placeholder="Message" className="input"/>

<br/>

<button><b>Send</b></button>

</div>

<div>

<div id='contacts'>
    <h2 className="contact">Contact Us</h2>
    <p id='p2'>Our team is dedicated to providing top-notch support and guidance to ensure your learning experience is seamless and successful.   Get in touch with us today and
       discover the endless possibilities that our platform offers.
    </p>

      <p id='p2'> LOOKING FOWARD TO HEARING FROM YOU SOON!</p>
    
    <div className='Information'>

    <div id='headoffice'>
    <img src="/images/location-svgrepo-com.svg" alt='location' className='photo'/>
        <p id='icons'><b>Head Office</b></p>
        <p className="place">LandMark Plaza,Khodek Rd,Nairobi</p>
    </div>

    <div id='emailus'>
    <img src="images/email-svgrepo-com (1).svg" alt='email' className='photo'></img>
    <p id='icons'><b>Email Us</b></p>
    <p className="email">uboracbc@gmail.com</p>
    </div>


    <div id='callus'>
    <img src="images/call-receive-svgrepo-com.svg" alt='call' className='photo'/>
    <p id='icons'><b>Call Us</b></p>
    <p className="numbers">+25489289/+25428238</p>
    </div>
    </div>

</div>

<div className='follow'>
    <h2 className='foll'>Follow Us On Social Media</h2>

    <div className="social">

    <img src="/images/facebook-svgrepo-com.svg" alt='faceboook' id='pictures'/>
    <img src="images/twitter-svgrepo-com (1).svg" alt='twitter' id='pictures'/>
    <img src="/images/instagram.svg" alt='instagram' className='pic'/>

    </div>

</div>

</div>
</div>

    );
}
export default Footer;