
import {useState} from 'react';


export const FaqItem = ({question,answer}) => {

    const [isOpen, setIsOpen] = 
    useState(false);

    const toggleFAQ = () =>{
        setIsOpen(!isOpen);
    };


    return (

        <div className='container'>

        <div className='faq-item'>
           
            <div 
            className="faq-question"
            onClick = {toggleFAQ}
            style={{color: isOpen ? 
                'purple':'black'
            }}>

                {question} 
                <span className='span'> {isOpen ? '-': '+' } </span>
                  
            </div>

            {isOpen && <div
            className="faq-answer">{answer}</div>}
             <hr className='line'></hr>
                 
        </div>
        </div>
        
    );
};


