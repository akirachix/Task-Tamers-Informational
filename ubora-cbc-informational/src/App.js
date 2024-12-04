// import Content from './Faqs'
// import FAQ from './FAQ';
import FAQ from './Faqs/Faq';
import React from 'react';
import './index.css'

const App = () =>{

  const faqs = [
    {
      question: 'what is ubora?',
      answer: 'Ubora is a platform build to improve CBC student engagement during online learning. It offers different content organized by different topics. '
    
    },
    {
      question:'What kind of educational content does Ubora offer? ',
      answer:'Ubora is a platform build to improve CBC student engagement during online learning. It offers different content organized by different topics. '
    },
    {
      question: 'Do I need internet to access content ?',
      answer:'Ubora is a platform build to improve CBC student engagement during online learning. It offers different content organized by different topics. '
    },
    {
      question: 'What subjects are currently available on the platform ? ',
      answer:'Ubora is a platform build to improve CBC student engagement during online learning. It offers different content organized by different topics. '

    },
  ]

  return(
    <div>
      <h1 id='faqs'>FAQs</h1>
      <div>
      <h2 className='heading'>Frequently Asked Questions</h2>
      <p className='par'>Below are answers to some of the most frequently asked questions (FAQS) about Ubora and our platform.</p>
      </div>
      {faqs.map((faq,index) =>(
        <FAQ className='all-questions'key={index}
        question={faq.question}
        answer={faq.answer}/>

      ))}


         <div className='search'>
           <img src="/images/questionmark.webp" alt='questionmark' className='search-image'/>
           <div className='text-over'>
           <p className='search-par'><b>What can we help you find?</b></p>
        <form>
          <input type='search' className='search-button'></input>
          <button className='search-submit'>search</button>
        </form>
        </div>

        </div>


      {/* <Content/> */}
  
    </div>


  );
};



export default App;