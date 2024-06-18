


import './index.css';

const Features = () =>{

return(

<div id="features-container">


<h1 id="features-heading">Features</h1>

<p id="features-paragraph">Ubora is  designed to allow members to access all
     its features on multiple devices. These<br/> include
      mobile devices, tablets, laptops and computers.
     This allows learning outside<br/> classroom.</p>

<div id="features-details">

<div>

<img src="/images/kids.jpg" className='practicals-image'/>

<h2 id="practicals-heading">Practicals</h2>
<p id="practicals-paragraph">Hands-on exercises and projects are rendered that apply theoretical 
    knowledge to real-world scenarios . The content is up to date and
     inline with CBC curriculum.</p>

</div>

<div>

<h2 id="QnA-heading">Q&A Post</h2>

<p id="QnA-paragraph">Students are able to post questions related to their courses.
    Teachers will contribute to these posts by giving answers and 
    providing feedback , fostering a collaborative learning environment.</p>

<img src="/images/Q&A.png" className='QnA-image'/>

</div>

</div>

</div>
)


}

export default Features;