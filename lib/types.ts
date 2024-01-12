export type blog = {
    id: string,
    title: string,
    category: string,
    content: string,
    username: string,
    blogImage: string,
    profileImage: string
    updatedAt: Date
}

export type blogtype = blog | null