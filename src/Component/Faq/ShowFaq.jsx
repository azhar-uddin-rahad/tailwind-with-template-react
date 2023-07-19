import React, { useState } from 'react';

const ShowFaq = ({ questions }) => {
    
    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
      setShow((prevState) => !prevState);
    };
  
    return (
      <>
        <div className='text-white'>
          <p onClick={toggleShow}>{show ? '—' : '⇊'}</p>
          <h1>{questions.ques}</h1>
        </div>
        {show && <p className='text-white'>{questions.ans}</p>}
      </>
    );
  };
  
  export default ShowFaq;