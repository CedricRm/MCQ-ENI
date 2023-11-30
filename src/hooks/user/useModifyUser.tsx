import { useState } from 'react'
import { modifyUser as modifyUserService } from '../../services/user'
import { modifyUser as modifyUserInterface } from '../../utils/interfaces'

const useModifyUser = () => {
    const [isModifyingUser, setIsModifyingUser] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const modifyUser = async (slug?: string, data?: modifyUserInterface) => {
        console.log(slug)
        console.log(data)
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        } else if (!slug || !data) {
            console.error('Invalid data to update')
        } else {
            try {
                setIsModifyingUser(true)
                await modifyUserService(authToken, slug, data)
                setIsModifyingUser(false)
                return true
            } catch (err) {
                console.error(err)
                setIsModifyingUser(true)
            }
        }
    }

    return { isModifyingUser, modifyUser }
}

export default useModifyUser
