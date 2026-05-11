// import { Card } from '@heroui/react';
// import React from 'react';

// const DestinationPage = async () => {
//     const res = await fetch('http://localhost:5000/destination')
//     const destinations = await res.json()
//     console.log(destinations)

//     return (
//         <div>
//             <h1>All destinations</h1>
//             <div>
//                 {
//                     destinations.map(destination => <Card key={destination._id} destination={destination} />)
//                 }
//             </div>
//         </div>
//     );
// };

// export default DestinationPage;


// import React from 'react';
// import Card from '@/components/Card';

// const DestinationPage = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination`, { cache: 'no-store' })
//     const destinations = await res.json()
//     // console.log(destinations)

//     return (
//         <div>
//             <h1>All destinations</h1>
//             {/* <div className='grid grid-cols-3'>
//                 {
//                     destinations.map(destination => (
//                         <Card key={destination._id} destination={destination} />
//                     ))
//                 }
//             </div> */}
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
//                 {
//                     destinations.map(destination => (
//                         <Card key={destination._id} destination={destination} />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default DestinationPage;


import React from 'react';
import Card from '@/components/Card';

const DestinationPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error(`Failed to fetch destinations: ${res.status}`)
    }

    const destinations = await res.json()

    return (
        <div>
            <h1>All destinations</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {
                    destinations.map(destination => (
                        <Card key={destination._id} destination={destination} />
                    ))
                }
            </div>
        </div>
    );
};

export default DestinationPage;







// import React from 'react';
// import Card from '@/components/Card';

// const DestinationPage = async () => {
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//     if (!apiUrl) {
//         throw new Error('NEXT_PUBLIC_API_URL is not defined. Check your .env.local file.');
//     }

//     const res = await fetch(`${apiUrl}/destination`, { cache: 'no-store' });

//     if (!res.ok) {
//         throw new Error(`Failed to fetch destinations: ${res.status} ${res.statusText}`);
//     }

//     const destinations = await res.json();

//     return (
//         <div>
//             <h1>All destinations</h1>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
//                 {destinations.map(destination => (
//                     <Card key={destination._id} destination={destination} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DestinationPage;