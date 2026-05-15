// 'use client'
// import { authClient } from '@/lib/auth-client';
// import { Check } from '@gravity-ui/icons';
// import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
// import { useRouter } from 'next/navigation';
// import { Divider } from "@heroui/react";
// import { FcGoogle } from "react-icons/fc";
// import React from 'react';


// const SignUppage = () => {
//     const router = useRouter();
//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget)
//         const user = Object.fromEntries(formData.entries());
//         // console.log(user)
//         const { data, error } = await authClient.signUp.email({
//             email: user.email,
//             password: user.password,
//             name: user.name,
//             image: user.image || undefined,
//             callbackURL: "/",

//         })
//         if (data) {
//             router.push("/")
//         }
//         if (error) {
//             alert("Error")
//         }
//         // console.log({ data, error })
//         const GoogleSignIn = async () => {
//             await authClient.signIn.social({
//                 provider: "google",
//             })
//         };
//         return (
//             <div className="max-w-7xl mx-auto">
//                 <div className='text-center my-3'>
//                     <h1 className='text-3xl font-bold'>Create Account</h1>
//                     <p>Start your adventure with WanderLust</p>
//                 </div>
//                 <Card className='border rounded-none'>

//                     <Form onSubmit={onSubmit} className='flex w-96 flex-col gap-4'>
//                         {/* Name Field */}
//                         <TextField isRequired name="name" type="text">
//                             <Label>Name</Label>
//                             <Input placeholder='Enter your name' />
//                             <FieldError />
//                         </TextField>

//                         {/* Email Field */}
//                         <TextField
//                             isRequired
//                             name="email"
//                             type="email"
//                             validate={(value) => {
//                                 if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                                     return "Please enter a valid email address";
//                                 }
//                                 return null;
//                             }}
//                         >
//                             <Label>Email</Label>
//                             <Input placeholder="john@example.com" />
//                             <FieldError />
//                         </TextField>

//                         {/* Image URL Field */}
//                         <TextField name="image" type="url">
//                             <Label>Image URL</Label>
//                             <Input placeholder="Image Url" />
//                             <FieldError />
//                         </TextField>

//                         {/* Password Field */}
//                         <TextField
//                             isRequired
//                             name="password"
//                             type="password"
//                             validate={(value) => {
//                                 if (value.length < 8) return "Password must be at least 8 characters";
//                                 if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
//                                 if (!/[0-9]/.test(value)) return "Password must contain at least one number";
//                                 return null;
//                             }}
//                         >
//                             <Label>Password</Label>
//                             <Input placeholder="Enter your password" />
//                             <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
//                             <FieldError />
//                         </TextField>

//                         {/* Submit Button */}
//                         <Button className='rounded-none w-full bg-cyan-500 text-white' type="submit">
//                             Create Account
//                         </Button>

//                         {/* Separator Section */}
//                         <div className="flex items-center gap-4 py-2">
//                             <Separator className="flex-1" />
//                             <p className="text-tiny uppercase text-default-400 whitespace-nowrap">
//                                 OR Signup With
//                             </p>
//                             <Separator className="flex-1" />
//                         </div>

//     {/* Google Login Button */}
//     {/* <Button className="w-full rounded-none" variant="bordered">
//     Sign in with Google
// </Button> */}
//     <Button onClick={GoogleSignIn} className="w-full rounded-none gap-3 font-medium border-gray-300" variant="outline">
//         <FcGoogle className="text-xl" />
//         Sign in with Google
//     </Button>
//                     </Form>
//                     {/* <Form onSubmit={onSubmit} className='flex w-96 flex-col gap-4'> */}
//                     {/* Name 


//                     <TextField
//                         isRequired

//                         name="name"
//                         type="text"

//                     >
//                         <Label>Name</Label>
//                         <Input placeholder='Enter your name' /> */}
//                     {/* <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description> */}
//                     {/* <FieldError />
//                     </TextField>

//                     <TextField
//                         isRequired
//                         name="email"
//                         type="email"
//                         validate={(value) => {
//                             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                                 return "Please enter a valid email address";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Email</Label>
//                         <Input placeholder="john@example.com" />
//                         <FieldError />
//                     </TextField>


//                     <TextField
//                         name="image"
//                         type="url"
//                     >
//                         <Label>Image URL</Label>
//                         <Input placeholder="Image Url" />
//                         <FieldError />
//                     </TextField>
//                     <TextField
//                         isRequired
//                         minLength={8}
//                         name="password"
//                         type="password"
//                         validate={(value) => {
//                             if (value.length < 8) {
//                                 return "Password must be at least 8 characters";
//                             }
//                             if (!/[A-Z]/.test(value)) {
//                                 return "Password must contain at least one uppercase letter";
//                             }
//                             if (!/[0-9]/.test(value)) {
//                                 return "Password must contain at least one number";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Password</Label>
//                         <Input placeholder="Enter your password" />
//                         <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
//                         <FieldError />
//                     </TextField>
//                     <div className="flex justify-center gap-2">
//                         <Button className={'rounded-none w-full bg-cyan-500'} type="submit">
//                             {/* <Check /> */}
//                     {/* Create Account */}
//                     {/* </Button> */}
//                     {/* <Button type="reset" variant="secondary">
//                             Reset
//                         </Button> */}
//                     {/* </div> */}
//                     {/* <div className='flex justify-center items-center gap-3'>

//                     </div> */}
//                     {/* <div className="max-w-md w-full space-y-4">

//                         <div className="flex items-center gap-4">
//                             <Divider className="flex-1" />
//                             <p className="text-small text-default-400 whitespace-nowrap">OR Signup With</p>
//                             <Divider className="flex-1" />
//                         </div>

//                         <Button className="w-full" variant="bordered">
//                             Sign in with Google
//                         </Button>
//                     </div>

//                 </Form> */

// //                 </Card>
// //             </div>
// //         );
// //     };
// // };
// // export default SignUppage;
//2
'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import React from 'react';

const SignUppage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image || undefined,
            callbackURL: "/",
        });

        if (data) {
            router.push("/");
        }
        if (error) {
            alert(error.message || "Something went wrong!");
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center p-4">
            <div className='text-center my-6'>
                <h1 className='text-3xl font-bold'>Create Account</h1>
                <p className="text-default-500">Start your adventure with WanderLust</p>
            </div>

            <Card className='p-6 border shadow-md w-full max-w-md'>
                <Form onSubmit={onSubmit} className='flex flex-col gap-4'>
                    {/* Name Field */}
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder='Enter your name' />
                        <FieldError />
                    </TextField>

                    {/* Email Field */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Image URL Field */}
                    <TextField name="image" type="url">
                        <Label>Image URL </Label>
                        <Input placeholder="https://example.com/photo.jpg" />
                        <FieldError />
                    </TextField>

                    {/* Password Field */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Must contain at least one number";
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Min. 8 chars, 1 uppercase, 1 number</Description>
                        <FieldError />
                    </TextField>

                    {/* Submit Button */}
                    <Button className='w-full bg-cyan-500 text-white font-semibold' type="submit">
                        Create Account
                    </Button>

                    {/* Separator Section */}
                    <div className="flex items-center gap-4 py-2">
                        <Separator className="flex-1" />
                        <p className="text-tiny uppercase text-default-400 whitespace-nowrap">
                            OR Signup With
                        </p>
                        <Separator className="flex-1" />
                    </div>

                    {/* Google Login Button */}
                    <Button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full gap-3 font-medium border-gray-300"
                        variant="outline"
                    >
                        <FcGoogle className="text-xl" />
                        Sign in with Google
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default SignUppage;

{/* <Button onClick={GoogleSignIn} className="w-full rounded-none gap-3 font-medium border-gray-300" variant="outline">
//         <FcGoogle className="text-xl" />
//         Sign in with Google
//     </Button> */}