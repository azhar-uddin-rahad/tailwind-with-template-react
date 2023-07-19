import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const ShowFaq = ({ questions }) => {

    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
      setShow((prevState) => !prevState);
    };
  
    return (
      <div className='py-8 border-b-2 border-[#ECECF1]'>
        <div className='text-[#282938] flex justify-between'>
          <h1 className='text-2xl font-poppins font-medium'><span className='text-[#2405F2] mr-[60px]'>0{questions.id}</span>{questions.ques}</h1>
        <p onClick={toggleShow}>{show ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faPlus} />}</p>
        </div>
        {show && <p className='w-[490px] text-[#282938] text-lg font-poppins font-medium'>{questions.ans}</p>}
      </div>
    );
  };
  
  export default ShowFaq;