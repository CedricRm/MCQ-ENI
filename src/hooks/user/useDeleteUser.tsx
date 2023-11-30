import { useState } from 'react'
import { deleteUserById as deleteUserIdService } from '../../services/user'

const useDeleteUser = () => {
    const [isDeletingUser, setIsDeletingUser] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const deleteUserById = async (userId: number) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsDeletingUser(true)
            await deleteUserIdService(authToken, userId)
            setIsDeletingUser(false)
            return true
        } catch (error) {
            console.error(error)
            setIsDeletingUser(true)
        }
    }
    return { deleteUserById, isDeletingUser }
}

export default useDeleteUser
