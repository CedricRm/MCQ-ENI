import { useState } from 'react'
import { createQuestionToChoice as createQuestionToChoiceService } from '../../services/questions'

const useCreateQuestion = () => {
    const [isCreatingQuestion, setIsCreatingQuestion] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const createQuestionToChoice = async (data: object) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsCreatingQuestion(true)
            await createQuestionToChoiceService(authToken, data)
            setIsCreatingQuestion(false)
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    return {
        createQuestionToChoice,
        isCreatingQuestion,
    }
}

export default useCreateQuestion
