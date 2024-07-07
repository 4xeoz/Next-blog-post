'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const { data, status } = useSession();
    console.log(status)
    const router = useRouter();

    if (status === 'loading') return <div className='h1-bold'>Loading...</div>;

    if (status === 'authenticated') {
        router.push('/');
        alert('your are already logged in!');
    }


    return (
        <div className='bg-gray-200 w-96 h-[300px] flex flex-col justify-around items-center rounded-md shadow-xl'>
            <span className='h5-bold'>Welcome back, Eyad!</span>
            <Button
                className='bg-red-600'
                type='button'
                onClick={() => signIn("google")}
            >
                Login with Google
            </Button>
        </div>
    );
}

export default SignIn;
