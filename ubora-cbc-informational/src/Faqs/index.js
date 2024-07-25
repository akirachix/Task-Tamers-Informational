
import React from 'react';
import './index.css';
import { FaqItem } from './components/FaqItem';
import './components/FaqItem/index.css';

const Faq = () =>{

  const faqs = [
    {
      question: 'What is Ubora?',
      answer: 'Ubora is a platform build to improve CBC student engagement during online learning. It offers different content organized by different topics.'
    
    },
    {
      question:'What kind of educational content does Ubora offer? ',
      answer:'Ubora CBC mainly offers practical step by step instructions for CBC subjects like Homescience and Agriculture.'
    },
    {
      question: 'Do I need internet to access content ?',
      answer:'Internet is required for one to access the practicals instructions and also for one to ask a question.'
    },
    {
      question: 'What subjects are currently available on the platform ? ',
      answer:'Ubora offers Homescience, Agriculture, Art and Craft, Integrated Science, and Health Education.'

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
        <FaqItem className='all-questions'key={index}
        question={faq.question}
        answer={faq.answer}/>

      ))}


         <div className='search'>
           <img src="/images/questionmark.webp" alt='questionmark' className='search-image'/>
           <div className='text-over'>
           <p className='search-par'><b>What can we help you find?</b></p>
        <form>
          <input type='search' className='search-button'></input>
          <button className='search-submit'>Search</button>
        </form>
        </div>

        </div>

  
    </div>


  );
};

export default Faq;



















