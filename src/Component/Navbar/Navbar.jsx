import React from 'react';
import logo from '../../assets/Finsweet white logo 1.png'

const Navbar = () => {
    return (
        <div className='navbar-section bg-mainColor'>
            <div className='w-[1280px] mx-auto'>
                   <nav className='flex items-center'>
                    <div className="logo w-[452px] pt-8 pb-8">
                        <img src={logo} alt="" />
                        </div>
                        <div className="menu flex items-center gap-12 pt-8 pb-[30px]">
                            <div className="listItem">
                            <ul className='flex gap-8 text-[#BBBBCB] font-poppins font-medium text-[16px]'>
                                <li className="transition duration-0 hover:duration-300 hover:font-semibold hover:text-[#fff]">Home</li>
                                <li className="transition duration-0 hover:duration-300 hover:font-semibold hover:text-[#fff]">About Us</li>
                                <li className="transition duration-0 hover:duration-300 hover:font-semibold hover:text-[#fff]">Feature</li>
                                <li className="transition duration-0 hover:duration-300 hover:font-semibold hover:text-[#fff] ">Pricing</li>
                                <li className="transition duration-0 hover:duration-300 hover:font-semibold hover:text-[#fff]">FAQ</li>
                                <li className="transition duration-0 hover:duration-300 hover:font-semibold hover:text-[#fff]">Blog</li>
                            </ul>
                            </div>
                            <div>
                                <button className='text-[#fff] font-poppins font-medium text-[16px] line border-2 border-[#fff] px-12 py-4 rounded-[41px]
                                 hover:bg-[#FCD980] hover:text-[#000]'>Contact Us</button>
                            </div>
                        </div>
                   </nav>
            </div>
            
            
        </div>
    );
};

export default Navbar;