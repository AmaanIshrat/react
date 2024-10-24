import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

export default function About() {
    const { theme } = useContext(ThemeContext);
  
    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <div className="w-full max-w-screen-xl mx-auto px-6  md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl  font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <div>
                            <h2 className="text-xl  font-bold md:text-4xl"> Who we are?</h2>
                        </div>
                        <p className="mt-6 ">
                            We are a passionate team of web developers and designers specializing in building high-performance, modern web applications using React and Tailwind CSS. Our goal is to create seamless, responsive, and visually engaging websites that offer the best user experience across devices.
                        </p>
                        <h2 className="text-xl  font-bold md:text-4xl"> Our Mission!</h2>
                        <p className="mt-4 ">
                            Our mission is to craft websites that not only look great but are also optimized for speed and performance. Using the latest technologies, like React for component-based architecture and Tailwind CSS for sleek, responsive design, we aim to deliver highly functional, scalable, and maintainable websites for businesses of all sizes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
