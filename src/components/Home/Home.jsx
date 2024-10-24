
import { Link } from 'react-router-dom';
import React, {useContext} from 'react'

import { ThemeContext } from '../../Context/ThemeContext';

export default function Home() {
  const { theme } = useContext(ThemeContext);
    return (

        // <div className="bg-white min-h-screen flex flex-col justify-center items-center ">
        <div className={`min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <div className="container m-auto px-6  md:px-12 xl:px-6"></div>
        {/* Text Section */}
        <div className="text-center max-w-lg mb-10">
          <h1 className="text-4xl font-bold ">
            We design and develop user-friendly websites and mobile applications using React and Talwind CSS.
          </h1>
          <p className="text-lg mt-4">
            With a user and business-focus, we create innovative solutions that deliver measurable results.
          </p>
        </div>
           {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="./src/assets/Images/pcImg.png"  
          alt="Responsive Design"
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>
    </div>
//         <div className="mx-auto w-full max-w-7xl">
//             {/* <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Here Downlod</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     <img className="w-96" src="./src/assets/Images/lapImg.jpg" alt="image1" />
//                 </div>
//             </aside> */}
//                {/* <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"> */}
//       {/* Text Section */}
//       <div className="text-center max-w-lg mb-10">
//         <h1 className="text-4xl font-bold text-gray-800">
//           We design and develop user-friendly websites and mobile applications.
//         </h1>
//         <p className="text-lg text-gray-600 mt-4">
//           With a user and business-focus, we create innovative solutions that deliver measurable results.
//         </p>
     
//       {/* </div> */}

//             <div className="grid  place-items-center sm:mt-20">
//                 <img className="sm:w-96 w-48" src="./src/assets/Images/image.jpg" alt="image2" />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
//         </div>
//         </div>


    );
}