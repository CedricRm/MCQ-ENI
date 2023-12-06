import { useState } from 'react'
import { removeChoiceById as removeChoiceByIdService } from '../../services/questions'

const useRemoveChoice = () => {
    const [isRemovingChoice, setIsRemovingChoice] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const removeChoiceById = async (choiceId: number) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsRemovingChoice(true)
            await removeChoiceByIdService(authToken, choiceId)
            setIsRemovingChoice(true)
            return true
        } catch (err) {
            setIsRemovingChoice(true)
            return false
        }
    }
    return { removeChoiceById, isRemovingChoice }
}

export default useRemoveChoice
