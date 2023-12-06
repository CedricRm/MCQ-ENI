import { useState } from 'react'
import { removeQuestionToChoiceById as removeQuestionToChoiceByIdService } from '../../services/questions'

const useRemoveQuestion = () => {
    const [isRemovingQuestion, setIsRemovingQuestion] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const removeQuestionToChoice = async (questionId: number) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsRemovingQuestion(true)
            await removeQuestionToChoiceByIdService(authToken, questionId)
            setIsRemovingQuestion(true)
            return true
        } catch (err) {
            setIsRemovingQuestion(true)
            return false
        }
    }

    return { removeQuestionToChoice, isRemovingQuestion }
}

export default useRemoveQuestion
