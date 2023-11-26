import { useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/context/useUser'

interface AuthGardInterface {
    children: ReactNode
    redirectTo: string
    role: number
}

const AuthGard = ({ children, redirectTo, role }: AuthGardInterface) => {
    const authToken = localStorage.getItem('@mcqENI.token')
    const {
        userState: { userInfo },
    } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!authToken || userInfo.role != role) {
            navigate(redirectTo)
        }
    })

    return <>{children}</>
}

export default AuthGard
