import React from 'react'
import Image from "next/image"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"


const card = ({key, item}) => {
    return (
        <div key={key}>
            <div className='flex flex-col gap-4 xl:gap-10 xl:flex-row'>
                <div >
                    <Image src={"/assets/coding.png"} alt="Image" className=" object-cover aspect-[16/4] xl:aspect-[6/5] w-full" width={350} height={200} />
                </div>
                <div className=' gap-2 flex flex-col justify-between'>
                    <div>
                        <span>{item.createdAt.substring(0,10)} - </span><span className=' text-gray-500'>{item.catSlug}</span>
                    </div>
                    <h1 className='h5-bold'>{item.title}</h1>
                    <p className='p-regular-16'>{item.content}</p>
                    <Button variant="link" className="w-full button sm:w-fit p-0 p-regular-16 justify-start">
                        <Link href={`/posts/${item.slug}`}>Read more</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default card