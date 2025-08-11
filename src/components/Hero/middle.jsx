import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import Threads from '../../libs/Threads';
import TextType from '../../libs/TextType';
function Middle()
{
    return (
        <div className="max-w-screen-2xl w-full bg-dark h-[50vh] mx-auto rounded-[2rem] rounded-br-none flex items-center justify-between">
            <div className="px-8">
                <h1 className='text-white text-7xl'>
                    Logic Meets <br /> Innovation <span className='text-4xl'>at</span> <br />
                    <TextType
                        text={["Devologics", "Software"]}
                        typingSpeed={100}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className='font-semibold '
                        textColors={['#f36921', '#ffffff']}
                        loop={true}
                    />
                </h1>
                <p className='text-white text-xl mt-4 mb-12'>
                    At Devologics, we craft smart, scalable, and future-ready software solutions that merge cutting-edge technology with strategic thinking.
                </p>
                <a href="" className='bg-gradient-to-r from-secondary via-[#f69b6d] to-secondary hover:from-primary hover:via-[#4576ca] hover:to-primary text-white rounded-full px-6 py-4 transition-all duration-500'>Learn More</a>
            </div>
            <div className="w-full flex items-center justify-center h-full">
                <Threads
                    amplitude={4}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>
        </div>
    );
}

export default Middle;