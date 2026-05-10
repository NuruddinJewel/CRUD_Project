// import Image from 'next/image';
// import React from 'react';
// import { LuMapPin } from "react-icons/lu";
// import { SlCalender } from "react-icons/sl";
// const Card = ({ destination }) => {
//     const { imageUrl, price, destinationName, duration, country } = destination
//     return (
//         <div>
//             <Image
//                 className=''
//                 alt={destination}
//                 src={imageUrl}
//                 height={400}
//                 width={400}
//             />
//             <div className='flex items-center gap-1'>
//                 <div>
//                     <LuMapPin /> <span>{country}</span>
//                 </div>
//                 <div>
//                     <h2 className='text-xl font-bold'>
//                         {destinationName}
//                     </h2>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                     {/* <FaRegCalender /> */}
//                     <SlCalender />
//                     {duration}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;

import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RxExternalLink } from "react-icons/rx";
import Link from 'next/link';
// const Card = ({ destination }) => {
//     const { imageUrl, price, destinationName, duration, country } = destination
//     return (
//         <div>
//             {/* <div>
//                 <Image
//                     alt={destination}
//                     src={imageUrl}
//                     height={400}
//                     width={400}
//                 />
//             </div> */}
//             <div className='relative w-full h-[250px]'>
//                 <Image
//                     alt={destinationName}
//                     src={imageUrl}
//                     fill
//                     className='object-cover rounded-xl'
//                 />
//             </div>
//             <div className='flex justify-between'>
//                 <div className='flex items-center gap-1'>
//                     <div className='flex gap-1 items-center'>
//                         <LuMapPin /> <span>{country}</span>
//                     </div>
//                     <div>
//                         <h2 className='text-xl font-bold'>
//                             {destinationName}
//                         </h2>
//                     </div>
//                     <div className='flex gap-2 items-center'>
//                         <SlCalender />
//                         {duration}
//                     </div>
//                     <div>
//                         <h3 className='text-2xl font-bold'> ${price}</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
const Card = ({ destination }) => {
    const { _id, imageUrl, price, destinationName, duration, country } = destination

    return (
        <div className='rounded-xl overflow-hidden shadow-md'>
            <div className='relative w-full h-62.5'>
                <Image
                    alt={destinationName}
                    src={imageUrl}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='p-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <LuMapPin />
                        <span>{country}</span>
                    </div>
                    <h3 className='text-2xl font-bold'>${price}</h3>
                </div>
                <h2 className='text-xl font-bold'>{destinationName}</h2>
                <div className='flex items-center gap-2'>
                    <SlCalender />
                    <span>{duration}</span>
                    <Link href={`/destinations/${_id}`}><Button variant='ghost' className={'mt-1 text-cyan-500'}> <RxExternalLink />Book Now</Button></Link>
                </div>
            </div>

        </div>
    );
};

export default Card;
