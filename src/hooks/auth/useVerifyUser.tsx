import { VerifyUser as VerifyUserService } from '../../services/auth'
import useUser from '../context/useUser'

const useVerifyUser = () => {
    const { userDispatch } = useUser()

    const verifyUser = async (authToken: string) => {
        const userInfo = await VerifyUserService(authToken)
        if (userInfo) {
            // store user information to user context
            userDispatch({ type: 'setUserInfo', payload: userInfo })
        }
    }

    return { verifyUser }
}

export default useVerifyUser
