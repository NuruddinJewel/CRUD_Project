// "use client";

// import { DateField, Label } from "@heroui/react";
// import { Button } from "@heroui/react";
// import { useState } from "react";
// import { authClient } from "@/lib/auth-client";

// const TravelDateField = ({ destination }) => {
//     const [departureDate, setDepartureDate] = useState(null);

//     const { data: session } = authClient.useSession();
//     const user = session?.user;

//     const { _id, imageUrl, price, destinationName, country } = destination;

//     const handleBooking = async () => {
//         if (!departureDate) {
//             alert("Please select a departure date!");
//             return;
//         }

//         const bookingData = {
//             userId: user?.id,
//             userName: user?.name,
//             destinationId: _id,
//             destinationName,
//             price,
//             imageUrl,
//             country,
//             departureDate: new Date(departureDate),
//         };

//         console.log(bookingData);


//         // await fetch('/api/booking', { method: 'POST', body: JSON.stringify(bookingData) })
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(bookingData)
//         })
//         const data = await res.json();
//         console.log(data)
//     };

//     return (
//         <>
//             <DateField onChange={setDepartureDate} className="w-full" name="date">
//                 <Label>Departure Date</Label>
//                 <DateField.Group>
//                     <DateField.Input>
//                         {(segment) => <DateField.Segment segment={segment} />}
//                     </DateField.Input>
//                 </DateField.Group>
//             </DateField>


//             <Button
//                 onClick={handleBooking}
//                 className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md mt-3"
//                 endContent={<span>→</span>}
//             >
//                 Book Now
//             </Button>
//         </>
//     );
// };

// export default TravelDateField;

//2

"use client";

import { DateField, Label } from "@heroui/react";
import { Button } from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const TravelDateField = ({ destination }) => {
    const [departureDate, setDepartureDate] = useState(null);
    const [loading, setLoading] = useState(false);

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const { _id, imageUrl, price, destinationName, country } = destination;

    const handleBooking = async () => {
        if (!departureDate) {
            alert("Please select a departure date!");
            return;
        }

        if (!user) {
            alert("Please login first!");
            return;
        }

        // HeroUI DateField returns a DateValue object
        // .toString() gives "YYYY-MM-DD", then convert to JS Date
        const parsedDate = new Date(departureDate.toString());

        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: parsedDate,
            bookedAt: new Date(),
        };

        console.log("Booking Data:", bookingData);

        try {
            setLoading(true);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            if (!res.ok) {
                throw new Error("Booking failed!");
            }

            const data = await res.json();
            console.log("Booking result:", data);

            if (data.insertedId) {
                alert("Booking successful! 🎉");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <DateField onChange={setDepartureDate} className="w-full" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                </DateField.Group>
            </DateField>

            <Button
                onClick={handleBooking}
                isLoading={loading}
                isDisabled={loading}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md mt-3"
                endContent={!loading && <span>→</span>}
            >
                Book Now
            </Button>
        </>
    );
};

export default TravelDateField;