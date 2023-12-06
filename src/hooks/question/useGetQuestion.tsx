import { useState } from 'react'
import { getAllQuestionsByTestSlug as getAllQuestionsByTestSlugService } from '../../services/questions'

const useGetQuestion = () => {
    const [isGettingQuestions, setIsGettingQuestions] = useState(false)
    const [allQuestions, setAllQuestions] = useState([])
    const authToken = localStorage.getItem('@mcqENI.token')

    const getAllQuestionsByTestSlug = async (testSlug: string) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsGettingQuestions(true)
            const res = await getAllQuestionsByTestSlugService(
                authToken,
                testSlug
            )
            setAllQuestions(res)
            setIsGettingQuestions(false)
        } catch (err) {
            console.error(err)
            setIsGettingQuestions(true)
        }
    }

    return { getAllQuestionsByTestSlug, allQuestions, isGettingQuestions }
}

export default useGetQuestion
