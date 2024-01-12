import prisma from "@/lib/db/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("This is server: ", body)
        const blog = await prisma.blog.create({
            data: body
        });
        return Response.json({ blog }, { status: 201 })
    } catch (err) {
        console.log("From server: ",err)
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, input } = body
        const blog = await prisma.blog.update({
            where: { id },
            data: input 
        })
        return Response.json({ blog }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { id } = body
        const blog = await prisma.blog.delete({
            where: { id }
        })
    
        return Response.json({ message: "Note deleted" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}