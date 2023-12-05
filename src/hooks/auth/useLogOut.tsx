import { useNavigate } from 'react-router-dom'
import useUser from '../context/useUser'

const useLogOut = () => {
    const { userDispatch } = useUser()
    const navigate = useNavigate()

    const logout = () => {
        // unset userInfo to user context
        userDispatch({ type: 'setUserInfo', payload: {} })
        // remove user token to local storage
        localStorage.setItem('@mcqENI.token', '')
        // redirect to welcome page
        navigate('/')
    }
    return { logout }
}

export default useLogOut
