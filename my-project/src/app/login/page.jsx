'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries());
        // console.log(user)
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/",

        })
        console.log({ data, error })
        if (data) {
            router.push("/")
            // redirect('/') //for server side
        }
        if (error) {
            alert("Error")
        }
        // console.log({ data, error })

    };
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };
    return (
        <div className="max-w-7xl mx-auto">
            <div className='text-center my-3'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p>Start your adventure with WanderLust</p>
            </div>
            <Card className='border rounded-none'>
                <Form onSubmit={onSubmit} className='flex w-96 flex-col gap-4'>
                    {/* Name  */}


                    {/* <TextField
                        isRequired

                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input placeholder='Enter your name' />
                        {/* <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description> */}
                    {/* <FieldError /> */}
                    {/* </TextField> */}

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


                    {/* <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Image Url" />
                        <FieldError />
                    </TextField> */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={'rounded-none w-full bg-cyan-500'} type="submit">
                            {/* <Check /> */}
                            Login
                        </Button>
                        {/* <Button type="reset" variant="secondary">
                            Reset
                        </Button> */}
                    </div>
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

export default LoginPage;


//  <div className="flex items-center gap-4 py-2">
//                         <Separator className="flex-1" />
//                         <p className="text-tiny uppercase text-default-400 whitespace-nowrap">
//                             OR Signup With
//                         </p>
//                         <Separator className="flex-1" />
//                     </div>

//                     {/* Google Login Button */}
//                     <Button
//                         type="button"
//                         onClick={handleGoogleSignIn}
//                         className="w-full gap-3 font-medium border-gray-300"
//                         variant="outline"
//                     >
//                         <FcGoogle className="text-xl" />
//                         Sign in with Google
//                     </Button>
//                 </Form>
//             </Card>
//         </div>