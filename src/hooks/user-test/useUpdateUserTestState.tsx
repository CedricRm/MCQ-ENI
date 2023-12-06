import { useState } from 'react'
import { updateUserTestState as updateUserTestStateService } from '../../services/test'
import useUser from '../context/useUser'

const useUpdateUserTestState = () => {
    const [isUpdatingTest, setIsUpdatingTest] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')
    const {
        userState: { userInfo },
    } = useUser()

    const updateUserTestState = async (slug?: string) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        } else if (!slug || !userInfo.sub) {
            console.error('Invalid data to update')
        } else {
            try {
                setIsUpdatingTest(true)
                await updateUserTestStateService(authToken, userInfo.sub, slug)
                setIsUpdatingTest(false)
                return true
            } catch (err) {
                console.error(err)
                setIsUpdatingTest(true)
            }
        }
    }

    return { isUpdatingTest, updateUserTestState }
}

export default useUpdateUserTestState
