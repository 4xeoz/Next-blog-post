import { NextResponse } from "next/server"
import prisma from "@/utils/connect"

export const GET = async (req, res) => {
    try {
        
        const categories = await prisma.category.findMany()
        return new NextResponse( JSON.stringify( categories, {status: 200}))

    } catch (error) {
        console.error(error)
        return new NextResponse( JSON.stringify({ message: "An error occurred"}, {status: 500}))
        
    }
    }