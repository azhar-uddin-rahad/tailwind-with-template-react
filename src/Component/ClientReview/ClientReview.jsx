import React from 'react';
import mypic from '../../assets/azhar-uddin-rahad (1).png'

const ClientReview = () => {
    return (
        <div className='ClientReview-section mt-[26px] bg-[#F4F6FC] pb-[130px]'>
            <div className='max-w-7xl mx-auto '>
                <div className='flex pt-[120px]'>
                    <div className='w-1/3'>
                        <h3 className=' w-72 mb-4 text-[#282938] font-poppins font-semibold text-[38px] leading-[56px] '>What our clients say about us</h3>
                        <p className='text-[#282938] font-poppins font-medium text-[16px] leading-[28px] my-4  w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className='w-2/3'>
                    <h3 className='w-[710px] mb-4 text-[#282938] font-poppins font-medium text-[32px] leading-[56px] '>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus"</h3>
                    <div className='flex justify-start items-center'>
                        <div className='w-[70px] '>
                            <img  src={mypic} alt="" />
                        </div>
                        <div className='w-2/3'>
                            <h3 className='text-lg text-[#282938] font-poppins font-medium'>Azhar uddin rahad</h3>
                            <p className='text-[12px] font-poppins font-medium'>Vice President</p>
                        </div>

                    </div>
                    </div>

                </div>
            </div>
           
            
        </div>
    );
};

export default ClientReview;