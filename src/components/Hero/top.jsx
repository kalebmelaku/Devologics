import React from 'react';
import logo from '../../assets/logo.png';
import { ArrowRight, Mail } from 'lucide-react';
function Top()
{
    return (
        <div className="relative max-w-screen-2xl w-full bg-dark mx-auto mt-4">
            <div className='absolute top-0 left-0 w-full h-10 bg-white'></div>
            <div className="navigation relative h-20 flex items-center justify-between">
                <div className="logo bg-white rounded-br-[2rem] w-32 h-20 flex flex-col items-center justify-center">
                    <img src={logo} alt="" className='w-1/2 p-2' />
                </div>
                <nav className='flex relative items-center h-20 justify-center rounded-tl-[2rem] rounded-tr-[2rem] bg-dark w-full'>
                    <ul className='flex items-center space-x-6 text-lg font-semibold'>
                        <li><a href="#" className="text-white hover:text-secondary">Home</a></li>
                        <li><a href="#" className="text-white hover:text-secondary">About</a></li>
                        <li><a href="#" className="text-white hover:text-secondary">Services</a></li>
                        <li><a href="#" className="text-white hover:text-secondary">Contact</a></li>
                    </ul>
                </nav>
                <div className="bg-white rounded-bl-[2rem] w-48 h-full flex flex-col items-center justify-center">
                    <a href='' className="bg-secondary hover:bg-primary text-white px-5 py-3 rounded-full flex items-center justify-center transition-all duration-300">
                        Contact Us
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Top;