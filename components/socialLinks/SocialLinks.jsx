import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { socialMediaLinks } from '@/constants/index'

const SocialLinks = () => {
  return (
    <div className=" min-w-fit md:py-0">
                <ul className="flex gap-5 ">
                    {socialMediaLinks.map((socialLink) => (
                        <li key={socialLink.href}>
                            <Link href={socialLink.href}>
                                <Image
                                    src={socialLink.source}
                                    alt={socialLink.name}
                                    width={24}
                                    height={24}
                                    className="filter dark:invert"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
  )
}

export default SocialLinks