'use client'
import React from "react";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


const navigationLinks = () => {
    const { status } = useSession();
    console.log(status);
    return (
        <div>
            <ul className=" flex md:flex-row gap-8 flex-col md:pt-0 pt-6">
                {status === 'authenticated' && ( <Button onClick={signOut}>logout</Button>)}
                {headerLinks.map((link) => (
                    <li className="my-auto" key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default navigationLinks;
