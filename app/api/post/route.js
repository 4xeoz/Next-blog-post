import { NextResponse } from "next/server"
import prisma from "@/utils/connect"


export const GET = async (req) => {
    
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const cat = searchParams.get('cat');
    const POST_PER_PAGE = 2;

    try {
        
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany({
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (page - 1),
                where: {
                    ...(cat && {catSlug: cat})
                },
            }),
            prisma.post.count({
                where: {
                    ...(cat && {catSlug: cat})
                },
            }),

        ])
        return new NextResponse( JSON.stringify( {posts, count}, {status: 200}))

    } catch (error) {
        console.error(error)
        return new NextResponse( JSON.stringify({ message: "An error occurred"}, {status: 500}))
        
    }
}

// Create a new post
export const POST = async (req) => {

    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: {
                ...body,
                userEmail: "cheeshum940@gmail.com",
            }
        })
        return new NextResponse( JSON.stringify( post, {status: 200}))
        
    } catch (error) {
        console.error(error)
        return new NextResponse( JSON.stringify({ message: "An error occurred"}, {status: 500}))
        
    }
}