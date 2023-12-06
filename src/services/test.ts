import { VITE_API_URL } from '.'
import axiosInstance from '../utils/api'

export const getAllTests = async (authToken: string) => {
    const res = await axiosInstance(VITE_API_URL, 'get', `/tests`, {
        Authorization: 'Bearer ' + authToken,
    })
    return res
}

export const getTestBySlug = async (authToken: string, slug: string) => {
    const res = await axiosInstance(VITE_API_URL, 'get', `/tests/${slug}`, {
        Authorization: 'Bearer ' + authToken,
    })
    return res
}

export const createTest = async (authToken: string, data: object) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'post',
        `/tests`,
        { Authorization: 'Bearer ' + authToken },
        { ...data }
    )
    return res
}

export const modifyTest = async (
    authToken: string,
    slug: string,
    data: object
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'put',
        `/tests/${slug}`,
        { Authorization: 'Bearer ' + authToken },
        { ...data }
    )
    return res
}

export const deleteTest = async (authToken: string, testId: number) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'delete',
        `/tests/${testId}`,
        {
            Authorization: 'Bearer ' + authToken,
        }
    )
    return res
}

export const getUserTestByTestSlug = async (
    authToken: string,
    testSlug: string
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'get',
        `/user-test/${testSlug}`,
        {
            Authorization: 'Bearer ' + authToken,
        }
    )
    return res
}

export const createUserTest = async (
    authToken: string,
    userId: number,
    testId: number
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'post',
        `/user-test`,
        { Authorization: 'Bearer ' + authToken },
        { user: userId, test: testId }
    )
    return res
}

export const updateUserTestState = async (
    authToken: string,
    userId: number,
    slug: string
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'put',
        `user-test/${slug}/${userId}`,
        { Authorization: 'Bearer ' + authToken }
    )
    return res
}

export const createUserChoice = async (
    authToken: string,
    userId: number,
    choiceId: number
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'post',
        `/user-choice`,
        { Authorization: 'Bearer ' + authToken },
        { user: userId, choice: choiceId }
    )
    return res
}
