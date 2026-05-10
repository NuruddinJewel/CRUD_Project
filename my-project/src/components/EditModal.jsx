// "use client";

// import { Envelope } from "@gravity-ui/icons";
// import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
// import { FieldError, Select, ListBox, TextArea, } from '@heroui/react';
// import Link from "next/link";
// import { FaEdit } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";
// const onSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData(e.currentTarget)
//     const destination = Object.fromEntries(formData.entries())
//     console.log(destination)
//     const res = await fetch('http://localhost:5000/destination', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(destination)
//     })
//     const data = await res.json()
//     console.log(data)
// }
// export function EditModal() {
//     return (
//         <Modal>
//             {/* <Button variant="secondary">Open Contact Form</Button> */}
//             <div className="flex items-center gap-2">
//                 <Link href={`/destinations/${id}/edit`}>
//                     <Button
//                         variant="bordered"
//                         size="sm"
//                         startContent={<FaEdit size={13} />}
//                         className="rounded-md border-gray-300 text-gray-700 text-sm font-medium"
//                     >
//                         Edit
//                     </Button>
//                 </Link>
//                 <Button
//                     variant="bordered"
//                     size="sm"
//                     startContent={<MdCancel size={14} />}
//                     className="rounded-md border-red-400 text-red-500 text-sm font-medium hover:bg-red-50"
//                 >
//                     Cancel
//                 </Button>
//             </div>
//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-md">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                                 <Envelope className="size-5" />
//                             </Modal.Icon>
//                             <Modal.Heading>Contact Us</Modal.Heading>
//                             {/* <p className="mt-1.5 text-sm leading-5 text-muted">
//                 Fill out the form below and we'll get back to you. The modal adapts automatically
//                 when the keyboard appears on mobile.
//               </p> */}
//                         </Modal.Header>
//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 {/* <form className="flex flex-col gap-4">
//                   <TextField className="w-full" name="name" type="text">
//                     <Label>Name</Label>
//                     <Input placeholder="Enter your name" />
//                   </TextField>
//                   <TextField className="w-full" name="email" type="email">
//                     <Label>Email</Label>
//                     <Input placeholder="Enter your email" />
//                   </TextField>
//                   <TextField className="w-full" name="phone" type="tel">
//                     <Label>Phone</Label>
//                     <Input placeholder="Enter your phone number" />
//                   </TextField>
//                   <TextField className="w-full" name="company">
//                     <Label>Company</Label>
//                     <Input placeholder="Enter your company name" />
//                   </TextField>
//                   <TextField className="w-full" name="message">
//                     <Label>Message</Label>
//                     <Input placeholder="Enter your message" />
//                   </TextField>
//                 </form> */}
//                                 < form
//                                     onSubmit={onSubmit}
//                                     className="p-10 space-y-8 w-3xl"
//                                 >
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                         {/* Destination Name */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="destinationName" isRequired>
//                                                 <Label>Destination Name</Label>
//                                                 <Input placeholder="Bali Paradise" className="rounded-2xl" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Country */}
//                                         <TextField name="country" isRequired>
//                                             <Label>Country</Label>
//                                             <Input placeholder="Indonesia" className="rounded-2xl" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Category - Updated Select Component */}
//                                         <div>
//                                             <Select
//                                                 name="category"
//                                                 isRequired
//                                                 className="w-full"
//                                                 placeholder="Select category"
//                                             >
//                                                 <Label>Category</Label>
//                                                 <Select.Trigger className="rounded-2xl">
//                                                     <Select.Value />
//                                                     <Select.Indicator />
//                                                 </Select.Trigger>
//                                                 <Select.Popover>
//                                                     <ListBox>
//                                                         <ListBox.Item id="Beach" textValue="Beach">
//                                                             Beach
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Mountain" textValue="Mountain">
//                                                             Mountain
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="City" textValue="City">
//                                                             City
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Adventure" textValue="Adventure">
//                                                             Adventure
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Cultural" textValue="Cultural">
//                                                             Cultural
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Luxury" textValue="Luxury">
//                                                             Luxury
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                     </ListBox>
//                                                 </Select.Popover>
//                                             </Select>
//                                         </div>

//                                         {/* Price */}
//                                         <TextField name="price" type="number" isRequired>
//                                             <Label>Price (USD)</Label>
//                                             <Input
//                                                 type="number"
//                                                 placeholder="1299"
//                                                 className="rounded-2xl"
//                                             />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Duration */}
//                                         <TextField name="duration" isRequired>
//                                             <Label>Duration</Label>
//                                             <Input
//                                                 placeholder="7 Days / 6 Nights"
//                                                 className="rounded-2xl"
//                                             />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Departure Date */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="departureDate" type="date" isRequired>
//                                                 <Label>Departure Date</Label>
//                                                 <Input type="date" className="rounded-2xl" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Image URL - Removed preview */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="imageUrl" isRequired>
//                                                 <Label>Image URL</Label>
//                                                 <Input
//                                                     type="url"
//                                                     placeholder="https://example.com/bali-paradise.jpg"
//                                                     className="rounded-2xl"
//                                                 />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Description */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="description" isRequired>
//                                                 <Label>Description</Label>
//                                                 <TextArea
//                                                     placeholder="Describe the travel experience..."
//                                                     className="rounded-3xl"
//                                                 />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>
//                                     </div>

//                                     {/* Buttons */}

//                                     <Button
//                                         type="submit"
//                                         variant="outline"
//                                         className=" rounded-none w-full bg-cyan-500 text-white"
//                                     >
//                                         Add Destination
//                                     </Button>
//                                 </form>
//                             </Surface>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button slot="close" variant="secondary">
//                                 Cancel
//                             </Button>
//                             <Button slot="close">Send Message</Button>
//                         </Modal.Footer>
//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal >
//     );
// }

//3
// "use client";

// import {
//     Button,
//     FieldError,
//     Input,
//     Label,
//     ListBox,
//     Modal,
//     Select,
//     Surface,
//     TextArea,
//     TextField,
// } from "@heroui/react";
// import { FaEdit } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";

// const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const destination = Object.fromEntries(formData.entries());
//     console.log(destination);
//     const res = await fetch("http://localhost:5000/destination", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(destination),
//     });
//     const data = await res.json();
//     console.log(data);
// };

// export function EditModal({ id }) {
//     return (
//         <Modal>
//             {/* Trigger buttons */}
//             <div className="flex items-center gap-2">
//                 <Modal.Trigger>
//                     <Button
//                         variant="bordered"
//                         size="sm"
//                         startContent={<FaEdit size={13} />}
//                         className="rounded-md border-gray-300 text-gray-700 text-sm font-medium"
//                     >
//                         Edit
//                     </Button>
//                 </Modal.Trigger>
//                 <Button
//                     variant="bordered"
//                     size="sm"
//                     startContent={<MdCancel size={14} />}
//                     className="rounded-md border-red-400 text-red-500 text-sm font-medium hover:bg-red-50"
//                 >
//                     Cancel
//                 </Button>
//             </div>

//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-2xl">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             <Modal.Heading>Edit Destination</Modal.Heading>
//                         </Modal.Header>

//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 <form onSubmit={onSubmit} className="space-y-6">
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                                         {/* Destination Name */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="destinationName" isRequired className="w-full">
//                                                 <Label>Destination Name</Label>
//                                                 <Input placeholder="Bali Paradise" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Country */}
//                                         <TextField name="country" isRequired className="w-full">
//                                             <Label>Country</Label>
//                                             <Input placeholder="Indonesia" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Category */}
//                                         <Select name="category" isRequired className="w-full">
//                                             <Label>Category</Label>
//                                             <Select.Trigger>
//                                                 <Select.Value />
//                                                 <Select.Indicator />
//                                             </Select.Trigger>
//                                             <Select.Popover>
//                                                 <ListBox>
//                                                     <ListBox.Item id="Beach" textValue="Beach">
//                                                         Beach
//                                                         <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Mountain" textValue="Mountain">
//                                                         Mountain
//                                                         <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="City" textValue="City">
//                                                         City
//                                                         <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Adventure" textValue="Adventure">
//                                                         Adventure
//                                                         <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Cultural" textValue="Cultural">
//                                                         Cultural
//                                                         <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Luxury" textValue="Luxury">
//                                                         Luxury
//                                                         <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                 </ListBox>
//                                             </Select.Popover>
//                                         </Select>

//                                         {/* Price */}
//                                         <TextField name="price" isRequired className="w-full">
//                                             <Label>Price (USD)</Label>
//                                             <Input type="number" placeholder="1299" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Duration */}
//                                         <TextField name="duration" isRequired className="w-full">
//                                             <Label>Duration</Label>
//                                             <Input placeholder="7 Days / 6 Nights" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Departure Date */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="departureDate" isRequired className="w-full">
//                                                 <Label>Departure Date</Label>
//                                                 <Input type="date" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Image URL */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="imageUrl" isRequired className="w-full">
//                                                 <Label>Image URL</Label>
//                                                 <Input
//                                                     type="url"
//                                                     placeholder="https://example.com/image.jpg"
//                                                 />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Description */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="description" isRequired className="w-full">
//                                                 <Label>Description</Label>
//                                                 <TextArea placeholder="Describe the travel experience..." />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>
//                                     </div>

//                                     <Button
//                                         type="submit"
//                                         className="w-full bg-cyan-500 text-white rounded-md"
//                                     >
//                                         Save Changes
//                                     </Button>
//                                 </form>
//                             </Surface>
//                         </Modal.Body>

//                         <Modal.Footer>
//                             <Button slot="close" variant="secondary">
//                                 Cancel
//                             </Button>
//                         </Modal.Footer>
//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }

//4

// "use client";

// import {
//     Button,
//     FieldError,
//     Input,
//     Label,
//     ListBox,
//     Modal,
//     Select,
//     Surface,
//     TextArea,
//     TextField,
// } from "@heroui/react";
// import { FaEdit } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";

// export function EditModal({ id, destination }) {
//     // destination object -> field 
//     const {
//         destinationName,
//         country,
//         category,
//         price,
//         duration,
//         departureDate,
//         imageUrl,
//         description,
//     } = destination;

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const updatedDestination = Object.fromEntries(formData.entries());

//         const res = await fetch(`http://localhost:5000/destination/${id}`, {
//             method: "PUT",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(updatedDestination),
//         });
//         const data = await res.json();
//         console.log(data);
//     };

//     return (
//         <Modal>
//             <div className="flex items-center gap-2">
//                 <Modal.Trigger>
//                     <Button
//                         variant="bordered"
//                         size="sm"
//                         startContent={<FaEdit size={13} />}
//                         className="rounded-md border-gray-300 text-gray-700 text-sm font-medium"
//                     >
//                         Edit
//                     </Button>
//                 </Modal.Trigger>
//                 <Button
//                     variant="bordered"
//                     size="sm"
//                     startContent={<MdCancel size={14} />}
//                     className="rounded-md border-red-400 text-red-500 text-sm font-medium hover:bg-red-50"
//                 >
//                     Cancel
//                 </Button>
//             </div>

//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-2xl">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             <Modal.Heading>Edit Destination</Modal.Heading>
//                         </Modal.Header>

//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 <form onSubmit={onSubmit} className="space-y-6">
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                                         {/* Destination Name */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="destinationName" isRequired className="w-full"
//                                                 defaultValue={destinationName}>
//                                                 <Label>Destination Name</Label>
//                                                 <Input placeholder="Bali Paradise" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Country */}
//                                         <TextField name="country" isRequired className="w-full"
//                                             defaultValue={country}>
//                                             <Label>Country</Label>
//                                             <Input placeholder="Indonesia" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Category */}
//                                         <Select name="category" isRequired className="w-full"
//                                             defaultSelectedKeys={category ? [category] : []}>
//                                             <Label>Category</Label>
//                                             <Select.Trigger>
//                                                 <Select.Value />
//                                                 <Select.Indicator />
//                                             </Select.Trigger>
//                                             <Select.Popover>
//                                                 <ListBox>
//                                                     <ListBox.Item id="Beach" textValue="Beach">
//                                                         Beach <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Mountain" textValue="Mountain">
//                                                         Mountain <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="City" textValue="City">
//                                                         City <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Adventure" textValue="Adventure">
//                                                         Adventure <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Cultural" textValue="Cultural">
//                                                         Cultural <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                     <ListBox.Item id="Luxury" textValue="Luxury">
//                                                         Luxury <ListBox.ItemIndicator />
//                                                     </ListBox.Item>
//                                                 </ListBox>
//                                             </Select.Popover>
//                                         </Select>

//                                         {/* Price */}
//                                         <TextField name="price" isRequired className="w-full"
//                                             defaultValue={String(price)}>
//                                             <Label>Price (USD)</Label>
//                                             <Input type="number" placeholder="1299" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Duration */}
//                                         <TextField name="duration" isRequired className="w-full"
//                                             defaultValue={duration}>
//                                             <Label>Duration</Label>
//                                             <Input placeholder="7 Days / 6 Nights" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Departure Date */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="departureDate" isRequired className="w-full"
//                                                 defaultValue={departureDate}>
//                                                 <Label>Departure Date</Label>
//                                                 <Input type="date" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Image URL */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="imageUrl" isRequired className="w-full"
//                                                 defaultValue={imageUrl}>
//                                                 <Label>Image URL</Label>
//                                                 <Input type="url" placeholder="https://example.com/image.jpg" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Description */}
//                                         <div className="md:col-span-2">
//                                             <TextField name="description" isRequired className="w-full"
//                                                 defaultValue={description}>
//                                                 <Label>Description</Label>
//                                                 <TextArea placeholder="Describe the travel experience..." />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>
//                                     </div>

//                                     <Button type="submit" className="w-full bg-cyan-500 text-white rounded-md">
//                                         Save Changes
//                                     </Button>
//                                 </form>
//                             </Surface>
//                         </Modal.Body>

//                         <Modal.Footer>
//                             <Button slot="close" variant="secondary">
//                                 Cancel
//                             </Button>
//                         </Modal.Footer>
//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }

//5

"use client";

import {
    AlertDialog,
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Select,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Delete } from "./Delete";

export function EditModal({ id, destination }) {
    const {
        destinationName,
        country,
        category,
        price,
        duration,
        departureDate,
        imageUrl,
        description,
    } = destination;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedDestination = Object.fromEntries(formData.entries());

        // PATCH 
        const res = await fetch(`http://localhost:5000/destination/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedDestination),
        });

        if (res.ok) {
            const data = await res.json();
            console.log("Updated:", data);
            window.location.reload();
        } else {
            console.error("Update failed:", res.status, res.statusText);
            alert(`Update failed: ${res.status} ${res.statusText}`);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <Modal>

                <Modal.Trigger>
                    {/* <Button
                        variant="bordered"
                        size="sm"
                        startContent={<FaEdit size={13} />}
                        className="rounded-md border-gray-300 text-gray-700 text-sm font-medium"
                    >
                        Edit
                    </Button> */}
                    <Button
                        variant="outline"
                        size="sm"
                        startContent={<FaEdit size={14} />}
                        className="rounded-md border-blue-400 text-blue-500 text-sm font-medium transition-all hover:bg-blue-50 active:scale-95"
                    >
                        <FaEdit /> Edit
                    </Button>

                </Modal.Trigger>
                {/* <Button
                    variant="bordered"
                    size="sm"
                    startContent={<MdCancel size={14} />}
                    className="rounded-md border-red-400 text-red-500 text-sm font-medium hover:bg-red-50"
                >
                    Cancel
                </Button> */}
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Edit Destination</Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <div className="md:col-span-2">
                                                <TextField name="destinationName" isRequired className="w-full"
                                                    defaultValue={destinationName}>
                                                    <Label>Destination Name</Label>
                                                    <Input placeholder="Bali Paradise" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            <TextField name="country" isRequired className="w-full"
                                                defaultValue={country}>
                                                <Label>Country</Label>
                                                <Input placeholder="Indonesia" />
                                                <FieldError />
                                            </TextField>

                                            <Select name="category" isRequired className="w-full"
                                                defaultSelectedKeys={category ? [category] : []}>
                                                <Label>Category</Label>
                                                <Select.Trigger>
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Beach" textValue="Beach">Beach <ListBox.ItemIndicator /></ListBox.Item>
                                                        <ListBox.Item id="Mountain" textValue="Mountain">Mountain <ListBox.ItemIndicator /></ListBox.Item>
                                                        <ListBox.Item id="City" textValue="City">City <ListBox.ItemIndicator /></ListBox.Item>
                                                        <ListBox.Item id="Adventure" textValue="Adventure">Adventure <ListBox.ItemIndicator /></ListBox.Item>
                                                        <ListBox.Item id="Cultural" textValue="Cultural">Cultural <ListBox.ItemIndicator /></ListBox.Item>
                                                        <ListBox.Item id="Luxury" textValue="Luxury">Luxury <ListBox.ItemIndicator /></ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>

                                            <TextField name="price" isRequired className="w-full"
                                                defaultValue={String(price)}>
                                                <Label>Price (USD)</Label>
                                                <Input type="number" placeholder="1299" />
                                                <FieldError />
                                            </TextField>

                                            <TextField name="duration" isRequired className="w-full"
                                                defaultValue={duration}>
                                                <Label>Duration</Label>
                                                <Input placeholder="7 Days / 6 Nights" />
                                                <FieldError />
                                            </TextField>

                                            <div className="md:col-span-2">
                                                <TextField name="departureDate" isRequired className="w-full"
                                                    defaultValue={departureDate}>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            <div className="md:col-span-2">
                                                <TextField name="imageUrl" isRequired className="w-full"
                                                    defaultValue={imageUrl}>
                                                    <Label>Image URL</Label>
                                                    <Input type="url" placeholder="https://example.com/image.jpg" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            <div className="md:col-span-2">
                                                <TextField name="description" isRequired className="w-full"
                                                    defaultValue={description}>
                                                    <Label>Description</Label>
                                                    <TextArea placeholder="Describe the travel experience..." />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        <Button type="submit" className="w-full bg-cyan-500 text-white rounded-md">
                                            Save Changes
                                        </Button>
                                    </form>
                                </Surface>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button slot="close" variant="secondary">Cancel</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
            <Delete id={id} destinationName={destinationName} />
        </div>
    );
}