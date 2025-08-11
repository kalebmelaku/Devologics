import React, { useEffect, useState } from 'react';
import bg from '../../assets/bg.png';
import Threads from '../../libs/Threads';
import TextType from '../../libs/TextType';
function FooterMiddle()
{
    return (
        <div className="max-w-screen-2xl relative w-full bg-dark h-[40vh] mx-auto rounded-[2rem] rounded-bl-none text-center rounded-tr-none">
            <div className="px-8 relative z-50">
                <h1 className='text-white text-7xl mb-16'>
                    Think.
                    <TextType
                        text={[" Innovate", " Develop", " Create", " Build"]}
                        typingSpeed={100}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className='font-semibold relative z-10'
                        textColors={['#f36921']}
                        loop={true}
                    />
                    Deliver.
                </h1>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start w-3/5">
                        <p className='text-white text-lg text-left mb-8'>At Devologics, we design and build secure, reliable, and easy-to-use software tailored to your needs. Our team turns ideas into powerful tools that help businesses streamline work, improve collaboration, and grow faster. From planning to launch, we handle every step so you can focus on what matters most — running your business.</p>
                        <p className='text-white text-lg'>2025 &copy; All rights reserved.</p>
                    </div>
                    <div className="flex items-start justify-evenly w-1/2">
                        <div className="text-left">
                            <h2 className='text-white text-xl mb-2'>Pages</h2>
                            <ul className='text-left space-y-2'>
                                <li><a href="#" className='text-white hover:text-orange-500'>Home</a></li>
                                <li><a href="#" className='text-white hover:text-orange-500'>About Us</a></li>
                                <li><a href="#" className='text-white hover:text-orange-500'>Services</a></li>
                                <li><a href="#" className='text-white hover:text-orange-500'>Contact</a></li>
                            </ul>
                        </div>
                        <div className="text-left">
                            <h2 className='text-white text-xl'>Other Pages</h2>
                            <ul className='text-left space-y-2 mt-2'>
                                <li><a href="#" className='text-white hover:text-orange-500'>Terms and Conditions</a></li>
                                <li><a href="#" className='text-white hover:text-orange-500'>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img src={bg} alt="" className='absolute -top-10 right-6 w-1/3' />
        </div>
    );
}

export default FooterMiddle;