'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { Button } from '@/components/ui/button'


const PaginationComponent = ({page, hasPrev, hasNext}) => {

    const router = useRouter()

    return (
        <>

            <div className='flex justify-between'>
                <Button disabled={!hasPrev} className="cursor-pointer" onClick={()=> router.push(`?page=${page - 1}`)} >
                    previous
                </Button>

                <Button disabled={!hasNext} className="cursor-pointer" onClick={()=> router.push(`?page=${page + 1}`)} >
                    next
                </Button>

            </div>
        </>
    )
}

export default PaginationComponent;