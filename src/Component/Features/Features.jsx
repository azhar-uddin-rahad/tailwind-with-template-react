import React from 'react';
import icon1 from '../../assets/Icon.svg';
import icon2 from '../../assets/Icon (1).svg';
import icon3 from '../../assets/Icon (2).svg';
import icon4 from '../../assets/Icon (3).svg';
import icon5 from '../../assets/Icon (4).svg';
import icon6 from '../../assets/Icon (5).svg';


const Features = () => {

    const similarLoop=[
        {
            icon: icon1,
            name:'Uses Client First',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: icon2,
            name:'Two Free Revision Round',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: icon3,
            name:'Template Customization',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: icon4,
            name:'24/7 Support',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: icon5,
            name:'Quick Delivery',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        },
        {
            icon: icon6,
            name:'Hands-on approach',
            paragraph:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
        }
    ]
    return (
        <div className='features-section bg-[#F4F6FC]'>
            <div className='w-container mx-auto pt-32'>
                <h6 className='text-center text-[#282938] font-poppins font-medium text-[16px] leading-[28px] my-4 '>Features</h6>
                <h3 className='w-[530px] mx-auto text-center  text-[#282938] font-poppins font-semibold text-[48px] leading-[64px] mb-12'>Design that solves problems, one product at a time</h3>
                <div className='flex flex-wrap gap-6 '>
                    {similarLoop.map((item,index)=><div className='w-1/4 mx-auto pt-[58px] bg-[#fff] pb-12 pl-12 pr-8' key={index}>
                        <div className='icon pb-5'>
                            <img src={item.icon} alt="" />
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.paragraph}</p>
                    </div>)

                    }
                </div>
            </div>

            
        </div>
    );
};

export default Features;