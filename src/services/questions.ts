import { VITE_API_URL } from '.'
import axiosInstance from '../utils/api'

export const createQuestionToChoice = async (
    authToken: string,
    data: object
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'post',
        `/questions/to-choice`,
        { Authorization: 'Bearer ' + authToken },
        { ...data }
    )
    return res
}

export const getAllQuestionsByTestSlug = async (
    authToken: string,
    testSlug: string
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'get',
        `/questions/to-choice/${testSlug}`,
        { Authorization: 'Bearer ' + authToken }
    )
    return res
}

export const updateQuestionToChoice = async (
    authToken: string,
    questionId: number,
    data: object
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'put',
        `/questions/to-choice/${questionId}`,
        { Authorization: 'Bearer ' + authToken },
        { ...data }
    )
    return res
}

export const removeChoiceById = async (authToken: string, choiceId: number) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'delete',
        `/questions/to-choice/choice/${choiceId}`,
        {
            Authorization: 'Bearer ' + authToken,
        }
    )
    return res
}

export const removeQuestionToChoiceById = async (
    authToken: string,
    questionId: number
) => {
    const res = await axiosInstance(
        VITE_API_URL,
        'delete',
        `/questions/to-choice/${questionId}`,
        {
            Authorization: 'Bearer ' + authToken,
        }
    )
    return res
}
