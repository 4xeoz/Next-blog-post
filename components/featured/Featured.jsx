import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const featured = () => {
  return (
    <div>
      <section className='py-5 bg-contain bg-inherit md:py-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 wrapper gap-10">
          <div className="flex justify-center">
            <Image
              src="/assets/coding.png"
              alt="hero"
              width={1000}
              height={1000}
              className='max-h-[70vh] object-center 2xl:max-h-[50vh] object-cover my-auto aspect-[16/6] md:aspect-auto'
            />
          </div>

          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Host, Connect, Celebrate Your Events First Time In Algeria!!</h1>
            <p className="p-regular-20">Book and connect with other communities and people just like you sharing the same interests.</p>
            <Button asChild className="w-full button sm:w-fit" size="lg">
              <Link href="#events">Get Started</Link>
            </Button>
          </div>
        </div>



      </section>
    </div>
  )
}

export default featured