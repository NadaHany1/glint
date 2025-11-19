// import React from 'react'
// import {FaBriefcase} from 'react-icons/fa'
// import Link from 'next/link'
// import Image from 'next/image'

// interface ServiceCardProps {
//     title:string,
//     desc:string,
//     icon ?: string
// }

// const ServiceCard = ({title, desc, icon} : ServiceCardProps) => {
//   return (
//     <div className="relative group flex flex-col justify-evenly items-start bg-gray-100 gap-3 w-full h-full p-5 rounded-2xl shadow-sm" data-aos='zoom-in'>
//         <div className="absolute inset-0 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
//         <div className='relative w-full aspect-video'>
//           <Image src='/search.svg' alt="search icon" fill={true} style={{color: "red"}} className='relative text-header-color m-auto text-5xl lg:text-7xl'/>
//         </div>  
//         <h2 className='text-black text-md md:text-lg: lg:text-2xl font-bold capitalize'>{title}</h2>
//         <p className='text-text-color'>{desc}</p>    
//         <Link href="" className='text-header-color'>Learn More</Link>
//     </div>
//   )
// }

// export default ServiceCard




// import React from "react";
// import Link from "next/link";
// import {
//   FaSearch,
//   FaFacebook,
//   FaPenNib,
//   FaEnvelope,
//   FaDollarSign,
//   FaChartLine,
// } from "react-icons/fa";

// interface ServiceCardProps {
//   title: string;
//   desc: string;
//   icon: string;
// }

// const IconsMap: any = {
//   FaSearch: FaSearch,
//   FaFacebook: FaFacebook,
//   FaPenNib: FaPenNib,
//   FaEnvelope: FaEnvelope,
//   FaDollarSign: FaDollarSign,
//   FaChartLine: FaChartLine,
// };

// const ServiceCard = ({ title, desc, icon }: ServiceCardProps) => {
//   const IconComponent = IconsMap[icon];

//   return (
//     <div
//       className="relative group flex flex-col justify-evenly items-start bg-gray-100 gap-3 w-full h-full p-5 rounded-2xl shadow-sm"
//       data-aos="zoom-in"
//     >
//       <div className="absolute inset-0 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

//       {IconComponent && (
//         <IconComponent className="text-header-color m-auto text-5xl lg:text-7xl" />
//       )}

//       <h2 className="text-black text-md md:text-lg lg:text-2xl font-bold capitalize">
//         {title}
//       </h2>

//       <p className="text-text-color">{desc}</p>
//       <Link href="" className="text-header-color">
//         Learn More
//       </Link>
//     </div>
//   );
// };

// export default ServiceCard;








import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";


interface ServiceCardProps {
  title: string;
  desc: string;
  icon: keyof typeof FaIcons;
}

const ServiceCard = ({ title, desc, icon }: ServiceCardProps) => {
  const IconComponent = FaIcons[icon] || FaIcons.FaBriefcase;

  return (
    <div
      className="relative group flex flex-col justify-evenly items-start bg-gray-100 gap-3 w-full h-full p-5 rounded-2xl shadow-sm"
      data-aos="zoom-in"
    >
      <div className="absolute inset-0 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

      <div className="relative w-full aspect-video flex justify-center items-center text-header-color">
        <IconComponent className="text-5xl md:text-7xl lg:text-9xl" />
      </div>

      <h2 className="text-black text-md md:text-lg lg:text-2xl font-bold capitalize">
        {title}
      </h2>
      <p className="text-text-color">{desc}</p>
      <Link href="" className="text-header-color">
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
