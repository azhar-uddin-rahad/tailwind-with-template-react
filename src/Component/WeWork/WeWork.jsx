import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
  import icon1 from '../../assets/pointer 1.svg'
  import icon2 from '../../assets/pointer2.svg'
  import icon3 from '../../assets/pointer3.svg'
  import icon4 from '../../assets/pointer4.svg'
const WeWork = () => {

    const similarLoop=[
        {
            icon: icon1,
            name:'Strategy',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            icon: icon2,
            name:'Wireframing',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            icon: icon3,
            name:'Design',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        },
        {
            icon: icon4,
            name:'Development',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
        }
    ]
    return (
        <div className='WeWork-section bg-[#F4F6FC]'>
            <div className='w-container mx-auto pt-32 pb-[104px]'>
                <div className='flex gap-32'>
                    <div className='w-2/3'>
                        <h1 className='text-[#282938] font-poppins font-semibold text-[48px] leading-[64px]'>How we work</h1>
                        <p className='w-80 text-[#282938] font-poppins font-normal text-[16px] leading-[28px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <button className='text-[#2405F2] font-poppins font-medium text-[18px] leading-[28px]'><span className='mr-4'>Get in touch with us</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </div>
                    <div className='flex flex-wrap'>
                        {similarLoop.map((item,index) =><div className='w-1/2 mb-6 ' key={index}>
                            <div className="icon mb-[25px]">
                                <img src={item.icon} alt="" />
                            </div>
                            <h3 className='text-[#282938] font-poppins font-medium text-[32px] leading-[28px] '>{item.name}</h3>
                            <p className='w-64 mt-2 text-[#282938] font-poppins font-normal text-[16px] leading-[28px] '>{item.paragraph}</p>

                        </div>)

                        }

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default WeWork;