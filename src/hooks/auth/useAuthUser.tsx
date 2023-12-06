import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn as LogInService } from '../../services/auth'
import useUser from '../context/useUser'
import { user } from '../../utils/interfaces'
import { ROLE_STUDENT, ROLE_TEACHER } from '../../utils/constants'

const useAuthUser = () => {
    const [isLoggingIn, SetIsLogginIn] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const { userDispatch } = useUser()
    const navigate = useNavigate()

    const handleRedirectUserByRole = (user: user) => {
        if (user.isadmin) {
            navigate('/admin')
        }

        switch (user.role) {
            case ROLE_STUDENT:
                return navigate('/student')
            case ROLE_TEACHER:
                return navigate('/teacher')
        }
    }

    const logIn = async (email: string, password: string) => {
        try {
            SetIsLogginIn(true)
            const res = await LogInService(email, password)
            if (res) {
                const userInfo = res[0]
                const userToken = res[1]

                // store user information to user context
                userDispatch({ type: 'setUserInfo', payload: userInfo })

                // store user token to local storage
                localStorage.setItem('@mcqENI.token', userToken.access_token)

                // redirect user
                handleRedirectUserByRole(userInfo)
            }
            SetIsLogginIn(false)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            if (err.statusCode === 403) {
                setLoginError(err.message)
            }
            SetIsLogginIn(false)
        }
    }

    return { logIn, isLoggingIn, loginError, handleRedirectUserByRole }
}

export default useAuthUser
