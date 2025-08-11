import React from 'react';
import logo from '../../assets/logo.png';
import { ArrowRight, Mail } from 'lucide-react';
function FooterTop()
{

    return (
        <div className="relative max-w-screen-2xl w-full bg-dark mx-auto mt-4">
            <div className='absolute top-0 left-0 w-full h-10 bg-white'></div>
            <div className="navigation relative h-20 flex items-center justify-between">
                <div className="logo bg-white rounded-br-[2rem] w-32 h-20 flex flex-col items-center justify-center">
                    <img src={logo} alt="" className='w-1/2 p-2' />
                </div>
                <nav className='flex relative items-center h-20 justify-center rounded-tl-[2rem] rounded-tr-[2rem] bg-dark w-full'>

                </nav>
            </div>
        </div>
    );
}

export default FooterTop;