import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const MenuCard = () => {
    return (
        <div>
            <div className='w-full'>
                <Link href="/" >
                    <div className='flex'>
                        <div className=' flex flex-col justify-between gap-2'>
                            <span className=' p-1 px-2 bg-stone-700 rounded-full text-xs w-fit text-white'>CATEGORY</span>
                            <h2 className=' font-medium'>Just a title that does not make anysense if you dont like it got fuck ur self</h2>
                            <span className='text-x p-medium-14'>Iyed Cherifi</span>
                            
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    )
}

export default MenuCard