// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { LuMapPin } from 'react-icons/lu';
// import { RxExternalLink } from 'react-icons/rx';
// import { SlCalender } from 'react-icons/sl';
// import { FaEdit } from "react-icons/fa";
// const desDetails = async ({ params }) => {
//     const { id } = await params


//     const res = await fetch(`http://localhost:5000/destination/${id}`)
//     const destination = await res.json()
//     // console.log(destination)
//     const { imageUrl, price, destinationName, duration, country, description } = destination
//     return (
//         <div className='max-w-7xl mx-auto flex justify-end'>
//             <div>
//                 <Button variant='outline' className={'rounded-none mt-5 mb-3 '}><FaEdit />Edit</Button>
//             </div>
//             <Image className='w-full h-100 object-cover'
//                 alt={destinationName}
//                 src={imageUrl}
//                 height={500}
//                 width={500}
//             />
//             <div className='p-3'>
//                 <div className='flex items-center justify-between'>
//                     <div className='flex items-center gap-1'>
//                         <LuMapPin />
//                         <span>{country}</span>
//                     </div>
//                     <h3 className='text-2xl font-bold'>${price}</h3>
//                 </div>
//                 <h2 className='text-xl font-bold'>{destinationName}</h2>
//                 <div className='flex items-center gap-2'>
//                     <SlCalender />
//                     <span>{duration}</span>
//                 </div>
//                 <h1 className='mt-10 text-2xl font-bold '> Overview</h1>
//                 <p>{description}</p>
//             </div>
//         </div>
//     );
// };

// export default desDetails;
//2
// import { Button, Card, Separator } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { LuMapPin, LuCalendar, LuArrowLeft } from "react-icons/lu";
// import { FaEdit, FaStar, FaCheck } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";
// import { EditModal } from "@/components/EditModal";

// const getDestination = async (id) => {
//     const res = await fetch(`http://localhost:5000/destination/${id}`, {
//         cache: "no-store",
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch destination");
//     }

//     return res.json();
// };

// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params;
//     const destination = await getDestination(id);

//     const {
//         imageUrl,
//         price,
//         destinationName,
//         duration,
//         country,
//         description,
//         rating,
//         reviews,
//         date,
//         highlights,
//     } = destination;

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="max-w-4xl mx-auto bg-white shadow-sm">
//                 <EditModal />
//                 {/* Top navigation bar */}
//                 <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
//                     <Link
//                         href="/destinations"
//                         className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                         <LuArrowLeft size={16} />
//                         Back to Destinations
//                     </Link>

//                     <div className="flex items-center gap-2">
//                         <Link href={`/destinations/${id}/edit`}>
//                             <Button
//                                 variant="bordered"
//                                 size="sm"
//                                 startContent={<FaEdit size={13} />}
//                                 className="rounded-md border-gray-300 text-gray-700 text-sm font-medium"
//                             >
//                                 Edit
//                             </Button>
//                         </Link>
//                         <Button
//                             variant="bordered"
//                             size="sm"
//                             startContent={<MdCancel size={14} />}
//                             className="rounded-md border-red-400 text-red-500 text-sm font-medium hover:bg-red-50"
//                         >
//                             Cancel
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Hero image */}
//                 <div className="relative w-full h-72 sm:h-96 overflow-hidden">
//                     <Image
//                         alt={destinationName}
//                         src={imageUrl}
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                 </div>

//                 {/* Body: info + booking card */}
//                 <div className="flex flex-col sm:flex-row gap-6 p-6">

//                     {/* Left: destination info */}
//                     <div className="flex-1 space-y-4">

//                         <div className="flex items-center gap-1 text-gray-500 text-sm">
//                             <LuMapPin size={14} />
//                             <span>{country}</span>
//                         </div>

//                         <h1 className="text-4xl font-bold text-gray-900 leading-tight">
//                             {destinationName}
//                         </h1>

//                         <div className="flex items-center gap-4 text-sm text-gray-600">
//                             {rating && (
//                                 <>
//                                     <span className="flex items-center gap-1 text-yellow-500 font-semibold">
//                                         <FaStar size={14} />
//                                         {rating}
//                                         <span className="text-gray-500 font-normal ml-1">
//                                             ({reviews} reviews)
//                                         </span>
//                                     </span>
//                                     {/* HeroUI Separator (vertical) */}
//                                     <Separator orientation="vertical" className="h-4" />
//                                 </>
//                             )}
//                             <span className="flex items-center gap-1">
//                                 <LuCalendar size={14} />
//                                 {duration}
//                             </span>
//                         </div>

//                         <div>
//                             <h2 className="text-xl font-bold text-gray-900 mb-2">Overview</h2>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 {description}
//                             </p>
//                         </div>

//                         {highlights?.length > 0 && (
//                             <div>
//                                 <h2 className="text-xl font-bold text-gray-900 mb-3">
//                                     Highlights
//                                 </h2>
//                                 <p className="text-gray-600 text-sm leading-relaxed mb-3">
//                                     {description}
//                                 </p>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
//                                     {highlights.map((item, i) => (
//                                         <div
//                                             key={i}
//                                             className="flex items-start gap-2 text-sm text-gray-700"
//                                         >
//                                             <FaCheck size={12} className="text-teal-500 mt-0.5 shrink-0" />
//                                             <span>{item}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Right: booking card */}
//                     <div className="w-full sm:w-64 shrink-0">
//                         <Card className="border border-gray-200 shadow-sm rounded-lg p-5 space-y-4">

//                             <div>
//                                 <p className="text-xs text-gray-500">Starting from</p>
//                                 <p className="text-3xl font-bold text-teal-600">
//                                     ${Number(price).toLocaleString()}
//                                 </p>
//                                 <p className="text-xs text-gray-500">per person</p>
//                             </div>

//                             {date && (
//                                 <div className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 flex items-center gap-2">
//                                     <LuCalendar size={14} className="text-gray-400" />
//                                     {date}
//                                 </div>
//                             )}

//                             <Button
//                                 className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md"
//                                 endContent={<span>→</span>}
//                             >
//                                 Book Now
//                             </Button>

//                             <div className="space-y-1.5 pt-1">
//                                 {[
//                                     "Free cancellation up to 7 days",
//                                     "Travel insurance included",
//                                     "24/7 customer support",
//                                 ].map((perk) => (
//                                     <div
//                                         key={perk}
//                                         className="flex items-center gap-2 text-xs text-gray-600"
//                                     >
//                                         <FaCheck size={10} className="text-teal-500 shrink-0" />
//                                         {perk}
//                                     </div>
//                                 ))}
//                             </div>

//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DestinationDetailsPage;

//3

// import { Button, Card, Separator } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { LuMapPin, LuCalendar, LuArrowLeft } from "react-icons/lu";
// import { FaStar, FaCheck } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";
// import { EditModal } from "@/components/EditModal";

// const getDestination = async (id) => {
//     const res = await fetch(`http://localhost:5000/destination/${id}`, {
//         cache: "no-store",
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch destination");
//     }

//     return res.json();
// };

// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params;
//     const destination = await getDestination(id);

//     const {
//         imageUrl,
//         price,
//         destinationName,
//         duration,
//         country,
//         description,
//         rating,
//         reviews,
//         date,
//         highlights,
//     } = destination;

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="max-w-4xl mx-auto bg-white shadow-sm">

//                 {/* Top navigation bar */}
//                 <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
//                     <Link
//                         href="/destinations"
//                         className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
//                     >
//                         <LuArrowLeft size={16} />
//                         Back to Destinations
//                     </Link>

//                     {/* EditModal replaces the old Edit + Cancel buttons */}
//                     <EditModal id={id} />
//                 </div>

//                 {/* Hero image */}
//                 <div className="relative w-full h-72 sm:h-96 overflow-hidden">
//                     <Image
//                         alt={destinationName}
//                         src={imageUrl}
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                 </div>

//                 {/* Body: info + booking card */}
//                 <div className="flex flex-col sm:flex-row gap-6 p-6">

//                     {/* Left: destination info */}
//                     <div className="flex-1 space-y-4">

//                         <div className="flex items-center gap-1 text-gray-500 text-sm">
//                             <LuMapPin size={14} />
//                             <span>{country}</span>
//                         </div>

//                         <h1 className="text-4xl font-bold text-gray-900 leading-tight">
//                             {destinationName}
//                         </h1>

//                         <div className="flex items-center gap-4 text-sm text-gray-600">
//                             {rating && (
//                                 <>
//                                     <span className="flex items-center gap-1 text-yellow-500 font-semibold">
//                                         <FaStar size={14} />
//                                         {rating}
//                                         <span className="text-gray-500 font-normal ml-1">
//                                             ({reviews} reviews)
//                                         </span>
//                                     </span>
//                                     <Separator orientation="vertical" className="h-4" />
//                                 </>
//                             )}
//                             <span className="flex items-center gap-1">
//                                 <LuCalendar size={14} />
//                                 {duration}
//                             </span>
//                         </div>

//                         <div>
//                             <h2 className="text-xl font-bold text-gray-900 mb-2">Overview</h2>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 {description}
//                             </p>
//                         </div>

//                         {highlights?.length > 0 && (
//                             <div>
//                                 <h2 className="text-xl font-bold text-gray-900 mb-3">
//                                     Highlights
//                                 </h2>
//                                 <p className="text-gray-600 text-sm leading-relaxed mb-3">
//                                     {description}
//                                 </p>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
//                                     {highlights.map((item, i) => (
//                                         <div
//                                             key={i}
//                                             className="flex items-start gap-2 text-sm text-gray-700"
//                                         >
//                                             <FaCheck size={12} className="text-teal-500 mt-0.5 shrink-0" />
//                                             <span>{item}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Right: booking card */}
//                     <div className="w-full sm:w-64 shrink-0">
//                         <Card className="border border-gray-200 shadow-sm rounded-lg p-5 space-y-4">

//                             <div>
//                                 <p className="text-xs text-gray-500">Starting from</p>
//                                 <p className="text-3xl font-bold text-teal-600">
//                                     ${Number(price).toLocaleString()}
//                                 </p>
//                                 <p className="text-xs text-gray-500">per person</p>
//                             </div>

//                             {date && (
//                                 <div className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 flex items-center gap-2">
//                                     <LuCalendar size={14} className="text-gray-400" />
//                                     {date}
//                                 </div>
//                             )}

//                             <Button
//                                 className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md"
//                                 endContent={<span>→</span>}
//                             >
//                                 Book Now
//                             </Button>

//                             <div className="space-y-1.5 pt-1">
//                                 {[
//                                     "Free cancellation up to 7 days",
//                                     "Travel insurance included",
//                                     "24/7 customer support",
//                                 ].map((perk) => (
//                                     <div
//                                         key={perk}
//                                         className="flex items-center gap-2 text-xs text-gray-600"
//                                     >
//                                         <FaCheck size={10} className="text-teal-500 shrink-0" />
//                                         {perk}
//                                     </div>
//                                 ))}
//                             </div>

//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DestinationDetailsPage;

//4

import { Button, Card, DateField, Label, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { LuMapPin, LuCalendar, LuArrowLeft } from "react-icons/lu";
import { FaStar, FaCheck } from "react-icons/fa";
import { EditModal } from "@/components/EditModal";
import TravelDateField from "@/components/DateField";

const getDestination = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch destination");
    }

    return res.json();
};

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const destination = await getDestination(id);

    const {
        imageUrl,
        price,
        destinationName,
        duration,
        country,
        description,
        rating,
        reviews,
        date,
        highlights,
    } = destination;

    return (
        <div className="min-h-screen bg-gray-50 justify-between">
            <div className="max-w-4xl mx-auto bg-white shadow-sm">

                {/* Top navigation bar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
                    <Link
                        href="/destinations"
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <LuArrowLeft size={16} />
                        Back to Destinations
                    </Link>

                    {/* destination object */}
                    <EditModal id={id} destination={destination} />
                </div>

                {/* Hero image */}
                <div className="relative w-full h-72 sm:h-96 overflow-hidden">
                    <Image
                        alt={destinationName}
                        src={imageUrl}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Body: info + booking card */}
                <div className="flex flex-col sm:flex-row gap-6 p-6">

                    {/* Left: destination info */}
                    <div className="flex-1 space-y-4">

                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <LuMapPin size={14} />
                            <span>{country}</span>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            {destinationName}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            {rating && (
                                <>
                                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                                        <FaStar size={14} />
                                        {rating}
                                        <span className="text-gray-500 font-normal ml-1">
                                            ({reviews} reviews)
                                        </span>
                                    </span>
                                    <Separator orientation="vertical" className="h-4" />
                                </>
                            )}
                            <span className="flex items-center gap-1">
                                <LuCalendar size={14} />
                                {duration}
                            </span>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Overview</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {highlights?.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3">Highlights</h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    {description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                                    {highlights.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <FaCheck size={12} className="text-teal-500 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: booking card */}
                    <div className="w-full sm:w-64 shrink-0">
                        <Card className="border border-gray-200 shadow-sm rounded-lg p-5 space-y-4">

                            <div>
                                <p className="text-xs text-gray-500">Starting from</p>
                                <p className="text-3xl font-bold text-teal-600">
                                    ${Number(price).toLocaleString()}
                                </p>
                                <p className="text-xs text-gray-500">per person</p>
                            </div>

                            {date && (
                                <div className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 flex items-center gap-2">
                                    <LuCalendar size={14} className="text-gray-400" />
                                    {date}
                                </div>
                            )}

                            {/* DateField */}
                            <div className="w-full">
                                <TravelDateField destination={destination} />
                            </div>

                            {/* <Button 
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md"
                                endContent={<span>→</span>}
                            >
                                Book Now
                            </Button> */}

                            <div className="space-y-1.5 pt-1">
                                {[
                                    "Free cancellation up to 7 days",
                                    "Travel insurance included",
                                    "24/7 customer support",
                                ].map((perk) => (
                                    <div key={perk} className="flex items-center gap-2 text-xs text-gray-600">
                                        <FaCheck size={10} className="text-teal-500 shrink-0" />
                                        {perk}
                                    </div>
                                ))}
                            </div>

                        </Card>
                    </div>
                </div>
            </div>
            {/* <div>
                text-muted ->light grey color
                <BookingCard />
            </div> */}
        </div>
    );
};

export default DestinationDetailsPage;