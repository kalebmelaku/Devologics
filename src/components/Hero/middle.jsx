import React from 'react';
import logo from '../../assets/logo.png';
function Middle()
{
    return (
        <div className="max-w-screen-2xl w-full bg-dark h-[50vh] mx-auto rounded-[2rem] rounded-br-none flex items-center justify-between">
            <div className="px-8">
                <h1 className='text-white text-7xl'>
                    Logic Meets <br /> Innovation at <br /> <span className='text-secondary font-semibold'>Devologics</span> Software
                </h1>
                <p className='text-white text-xl mt-4 mb-12'>
                    At Devologics, we craft smart, scalable, and future-ready software solutions that merge cutting-edge technology with strategic thinking.
                </p>
                <a href="" className='bg-secondary text-white rounded-full px-6 py-3 hover:bg-primary transition-all duration-500'>Learn More</a>
            </div>
            <div className="w-1/2 bg-primary">
                <img src={logo} alt="" />
            </div>
        </div>
    );
}

export default Middle;