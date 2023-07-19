import React from 'react';
import ShowFaq from './ShowFaq';


const Faq = () => {
    const question=[
        {
        id: 1,
        ques: "How much time does it take?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
        id: 2,
        ques: "How much time does it take?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
        id: 3,
        ques: "How much time does it take?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },


]
    return (
        <div className='pt-32'>
            <div>

           
            
            <div className=''>
                {question.map((item,index)=><ShowFaq key={index} questions={item}></ShowFaq>)

                }
            </div>
            </div> 
        </div>
    );
};

export default Faq;