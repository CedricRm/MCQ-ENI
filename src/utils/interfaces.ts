export interface question {
    id: number
    title: string
    responses: Array<string>
}

export interface user {
    createdAt: string
    email: string
    firstname: string
    id: number
    isadmin: boolean
    lastname: string
    level: number
    password?: number
    phone: number
    registrationnumber: string
    role: number
    slug: string
}
