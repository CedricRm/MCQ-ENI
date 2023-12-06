import { useState } from 'react'
import { createUserChoice as createUserChoiceService } from '../../services/test'
import useUser from '../context/useUser'

const useCreateUserChoice = () => {
    const [isCreatingUserChoice, setIsCreatingUserChoice] = useState(false)
    const {
        userState: { userInfo },
    } = useUser()

    const createUserChoice = async (choiceId: number) => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken && userInfo.sub)
            try {
                setIsCreatingUserChoice(true)
                await createUserChoiceService(authToken, userInfo.sub, choiceId)
                setIsCreatingUserChoice(false)
                return true
            } catch (err) {
                console.error(err)
                return false
            }
    }
    return { createUserChoice, isCreatingUserChoice }
}

export default useCreateUserChoice
