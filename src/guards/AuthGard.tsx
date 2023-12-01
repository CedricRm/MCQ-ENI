import { useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import useVerifyUser from '../hooks/auth/useVerifyUser'
import { user } from '../utils/interfaces'

interface AuthGardInterface {
    children: ReactNode
    redirectTo: string
    role: number
}

const AuthGard = ({ children, redirectTo, role }: AuthGardInterface) => {
    const authToken = localStorage.getItem('@mcqENI.token')
    const { verifyUser } = useVerifyUser()
    const navigate = useNavigate()

    useEffect(() => {
        async function checkUser() {
            if (authToken) {
                const userInfo: user = await verifyUser(authToken)
                if (userInfo.role != role) {
                    navigate(redirectTo)
                }
            } else {
                navigate(redirectTo)
            }
        }

        checkUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authToken])

    return <>{children}</>
}

export default AuthGard
