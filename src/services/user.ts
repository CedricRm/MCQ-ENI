import { VITE_API_URL } from '.'
import axiosInstance from '../utils/api'
import { modifyUser as modifyUserInterface } from '../utils/interfaces'

export const getAllUsers = async (authToken: string) => {
    const res = await axiosInstance(VITE_API_URL, 'get', `/users`, {
        Authorization: 'Bearer ' + authToken,
    })
    return res
}

export const filterUsers = async (authToken: string, filter: object) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'post',
        `users/filter`,
        { Authorization: 'Bearer ' + authToken },
        { ...filter }
    )
    return res
}

export const createUser = async (authToken: string, data: object) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'post',
        `/users`,
        { Authorization: 'Bearer ' + authToken },
        { ...data }
    )
    return res
}

export const deleteUserById = async (authToken: string, userId: number) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'delete',
        `/users/${userId}`,
        {
            Authorization: 'Bearer ' + authToken,
        }
    )
    return res
}

export const modifyUser = async (
    authToken: string,
    slug: string,
    data: modifyUserInterface
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'put',
        `/users/info/${slug}`,
        { Authorization: 'Bearer ' + authToken },
        { ...data }
    )
    return res
}
