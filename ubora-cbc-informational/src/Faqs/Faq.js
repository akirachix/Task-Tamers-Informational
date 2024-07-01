import './index.css'
// import React from 'react';{ useState } from "react";
import React, {useState} from 'react';


const FAQ = ({question,answer}) => {
    const [isOpen, setIsOpen] = 
    useState(false);

    const toggleFAQ = () =>{
        console.log('Toggled FAQ', question);
        setIsOpen(!isOpen);
    };


    return (
        <div>

        <div className='faq-item'>
           
            <div 
            className="faq-question"
            onClick = {toggleFAQ}
            style={{color: isOpen ? 
                'purple':'black'
            }}>
                {question} 
                <span> {isOpen ? '-': '+' } </span>
            </div>
            {isOpen && <div
            className="faq-answer">{answer}</div>}
             <hr className='line'></hr>

        
        </div>
        </div>
        
    );
};

export default FAQ;