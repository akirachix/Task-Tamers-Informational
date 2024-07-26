
import './index.css';


const Features = () =>{

return(
<div className='features-page'>
<div id="features-container">


<h1 id="features-heading">Features</h1>

<div  id="features-paragraph">
<p>Ubora is  designed to allow members to access all
     its features on multiple devices. These include
      mobile devices, tablets, laptops and computers.
     This allows learning outside classroom.</p>
     </div>

<div id="features-details">

<div>

<img src="/images/kids.jpg" alt="Kids" className='practicals-image'/>

<h2 id="practicals-heading">Practicals</h2>

<div  id="practicals-paragraph">
<p>Hands-on exercises and projects are rendered that apply theoretical
    knowledge to real-world scenarios . The content is up to date and
     inline with CBC curriculum.</p>
     </div>

</div>

<div>

<h2 id="QnA-heading">Q&A Post</h2>

<div id="QnA-paragraph">
<p>Students are able to post questions related to their courses.
    Teachers will contribute to these posts by giving answers and 
    providing feedback , fostering a collaborative learning environment.</p>
 </div>

<img src="/images/Q&A.png" alt='Q&A' className='QnA-image'/>

</div>

</div>

</div>
</div>
)


}

export default Features;