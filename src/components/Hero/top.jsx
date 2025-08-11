import React from 'react';
import logo from '../../assets/logo.png';
import { ArrowRight, Mail } from 'lucide-react';
import GooeyNav from '../../libs/GooeyNav';
function Top()
{
    const items = [
        { label: "Home", href: "#" },
        { label: "Services", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ];
    return (
        <div className="relative max-w-screen-2xl w-full bg-dark mx-auto mt-4">
            <div className='absolute top-0 left-0 w-full h-10 bg-white'></div>
            <div className="navigation relative h-20 flex items-center justify-between">
                <div className="logo bg-white rounded-br-[2rem] w-32 h-20 flex flex-col items-center justify-center">
                    <img src={logo} alt="" className='w-1/2 p-2' />
                </div>
                <nav className='flex relative items-center h-20 justify-center rounded-tl-[2rem] rounded-tr-[2rem] bg-dark w-full'>
                    <GooeyNav
                        items={items}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                </nav>
                <div className="bg-white rounded-bl-[2rem] w-48 h-full flex flex-col items-center justify-center">
                    <a href='' className="bg-gradient-to-r from-secondary via-[#f69b6d] to-secondary hover:bg-gradient-to-r hover:from-primary hover:via-[#4576ca] hover:to-primary text-white px-5 py-4 rounded-full flex items-center justify-center transition-all duration-300">
                        Contact Us
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Top;