import React from 'react';
import { ArrowRightIcon, FacebookIcon, Instagram, MessageCircle, PhoneCall } from 'lucide-react';
function FooterBottom()
{
    return (
        <div className="max-w-screen-2xl relative rounded-[2rem] w-full bg- mx-auto rounded-tl-none mb-2">
            <div className='absolute top-0 left-0 w-full h-10 bg-dark'></div>
            <div className="flex relative items-center justify-between">
                <div className='w-full bg-dark h-20 rounded-[2rem] rounded-tl-none rounded-tr-none '></div>
                <div className="logo bg-white rounded-tl-[2rem] w-48 h-20 flex flex-col items-center justify-center">
                    {/* <img src={logo} alt="" className='w-1/2 p-2' /> */}
                    <ul className='flex items-center space-x-2'>
                        <li className='bg-secondary hover:bg-primary transition-all duration-300 p-2 rounded-full text-white'><a href="https://instagram.com/devologics"><Instagram /></a></li>
                        <li className='bg-secondary hover:bg-primary transition-all duration-300 p-2 rounded-full text-white'><a href="https://t.me/kayo_jr"><MessageCircle /></a></li>
                        <li className='bg-secondary hover:bg-primary transition-all duration-300 p-2 rounded-full text-white'><a href="tel:+251923187741"><PhoneCall /></a></li>
                    </ul>
                </div>
            </div>
            {/* <div className="w-full bg-dark h-20 rounded-[2rem]"></div> */}
        </div>

    );
}

export default FooterBottom;