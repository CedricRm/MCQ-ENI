import { useState } from 'react'
import { updateQuestionToChoice as updateQuestionToChoiceService } from '../../services/questions'

const useUpdateQuestion = () => {
    const [isUpdatingQuestion, setIsUpdatingQuestion] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const updateQuestion = async (questionId: number, data: object) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsUpdatingQuestion(true)
            await updateQuestionToChoiceService(authToken, questionId, data)
            setIsUpdatingQuestion(true)
            return true
        } catch (err) {
            setIsUpdatingQuestion(true)
            return false
        }
    }
    return { updateQuestion, isUpdatingQuestion }
}

export default useUpdateQuestion
