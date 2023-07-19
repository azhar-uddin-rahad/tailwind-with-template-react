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
        ques: "What is your class naming convention?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
        id: 3,
        ques: "How do you communicate?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
        id: 4,
        ques: "What is your class naming convention?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
        id: 5,
        ques: "What is your class naming convention?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },


]
    return (
        <div className='pt-32'>
            <div className='max-w-7xl mx-auto flex items-start gap-5'>

            <div className='w-1/4 mt-5'>
                <h3 className=' w-44 mb-4 text-2xl text-[#282938] font-poppins font-semibold'>Frequently asked questions</h3>
                <p className='text-lg text-[#2405F2] font-poppins font-medium'>Contact us for more info</p>

            </div>
               
            <div className='w-3/4'>
                {question.map((item,index)=><ShowFaq key={index} questions={item}></ShowFaq>)

                }
            </div>
            </div> 
        </div>
    );
};

export default Faq;