export interface question {
    id: number
    title: string
    responses: Array<string>
}

export interface user {
    createdAt?: string
    email?: string
    firstname?: string
    id?: number
    isadmin?: boolean
    lastname?: string
    level?: number
    password?: number
    phone?: string
    registrationnumber?: string
    role?: number
    slug?: string
}

export interface modifyUser {
    firstname?: string
    lastname?: string
    registrationnumber?: string
    phone?: string
    email?: string
    level?: number
    role?: number
}

export interface processedUser {
    createdAt?: string
    email?: string
    firstname?: string
    id?: number
    isadmin?: boolean
    lastname?: string
    levels?: {
        id: number
        designation: string
    }
    password?: number
    phone?: string
    registrationnumber?: string
    user_role?: {
        id: number
        role: string
    }
    slug?: string
}
