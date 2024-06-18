import'./index.css'

const Footer = ()=>{
    return (

 
<div id='main'>

<br/>

<div id='first-part'>
<h2>Get In Touch</h2>
<label for='Your Name'>Your Name</label>
<input name="first name" type="text" placeholder="Your Name" className="input"/>

<label for="Your Email">Your Email</label>
<input name="first name" type="text" placeholder="Enter Email Address" className="input"/>

<label for="Message">Your Message</label>
<input name="message" type="text" placeholder="Message" className="input"/>

<br/> 

<button>Send</button>

</div>


<div>

<div id='second-part'>
    <h2>Contact Us</h2>
    <p>Our team is dedicated to providing top-notch support and guidance to <br/> ensure your learning experience is seamless and successful.Let’s
       embark on <br/> this education journey together. Get in touch with us today and
       discover the <br/> endless possibilities that our platform offers.
    <br/> <br/>
       LOOKING FOWARD TO HEARING FROM YOU SOON!</p>

    <div id='location'>
    <img src="/location-svgrepo-com.svg" alt='location'/>
        <p><b>Head Office</b></p>
        <p id='p1'>LandMark Plaza,Airwings Khodek Rd,Nairobi</p>
    </div>

    <div id='location'>
    <img src="/email-svgrepo-com (1).svg" alt='email'></img>
    <p><b>Email Us</b></p>
    <p id='p1'>uboracbc@gmail.com</p>
    </div>


    <div id='location'>
    <img src="/call-receive-svgrepo-com.svg" alt='call'/>
    <p><b>Call Us</b></p>
    <p id='p1'>+254689238913/+254278232872</p>
    </div>

</div>

<div>
    <p><b>Follow Us on Social Media</b></p>
    <img src="/facebook-svgrepo-com.svg" alt='faceboook' id='imgs'/>
    <img src="/images/instagram-svgrepo-com.svg" alt='instagram' id='imgs'/>
    <img src="/twitter-svgrepo-com (1).svg" alt='twitter' id='imgs'/>

</div>

</div>

</div>


    );
}
export default Footer;