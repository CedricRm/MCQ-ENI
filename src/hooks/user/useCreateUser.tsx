import { useState } from 'react'
import { createUser as createUserService } from '../../services/user'

const useCreateUser = () => {
    const [isCreatingUser, setIsCreatingUser] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const createUser = async (data: object) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsCreatingUser(true)
            await createUserService(authToken, data)
            setIsCreatingUser(false)
            return true
        } catch (err) {
            console.error(err)
            setIsCreatingUser(true)
        }
    }
    return { createUser, isCreatingUser }
}

export default useCreateUser
