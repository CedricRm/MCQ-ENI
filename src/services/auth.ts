import { VITE_API_URL } from '.'
import axiosInstance from '../utils/api'

export const LogIn = async (email: string, password: string) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'post',
        `/auth-user/signin`,
        {},
        {
            email,
            password,
        }
    )
    return res
}

export const VerifyUser = async (authToken: string) => {
    const res = await axiosInstance(VITE_API_URL, 'get', `/auth-user/verify`, {
        Authorization: `Bearer ${authToken}`,
    })
    return res
}
