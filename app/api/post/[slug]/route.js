import { NextResponse } from "next/server"
import prisma from "@/utils/connect"


// get single post
export const GET = async (req, {params}) => {
    
    const { slug } = params;


    try {

        const post = await prisma.post.findUnique({
            where: {
                slug: slug,
            },
            include: { user: true }
        })
        return new NextResponse( JSON.stringify( post, {status: 200}))

    } catch (error) {
        console.error(error)
        return new NextResponse( JSON.stringify({ message: "An error occurred"}, {status: 500}))
        
    }
}