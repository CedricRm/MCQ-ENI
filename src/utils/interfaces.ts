export interface question {
    id: number
    title: string
    responses: Array<string>
}

export interface user {
    id?: number
    createdAt?: string
    email?: string
    firstname?: string
    sub?: number
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
export interface test {
    designation?: string
    subject?: string
    yeartest?: string
    duration?: number | string
    datetest?: string
    level?: number
    user?: string
    slug?: string
}

export interface processedTest {
    id?: number
    designation?: string
    subject?: string
    yeartest?: string
    duration?: number | string
    datetest?: string
    levels?: {
        id: number
        designation: string
    }
    users?: {
        firstname: string
        id: number
        lastname: string
        user_role?: {
            id: number
            role: string
        }
    }
    slug?: string
}

export interface choice {
    content?: string
    iscorrect?: boolean
}

export interface processedChoice {
    id?: number
    content?: string
    iscorrect?: boolean
}

export interface processedQuestion {
    content?: string
    id?: number
    createdAt?: string
    test?: processedTest
    choices?: choice[]
}
