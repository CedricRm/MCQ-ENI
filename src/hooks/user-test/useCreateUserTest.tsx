import { useState } from 'react'
import { createUserTest as createUserTestService } from '../../services/test'
import useUser from '../context/useUser'

const useCreateUserTest = () => {
    const [isCreatingUserTest, setIsCreatingUserTest] = useState(false)
    const [UserTestCreated, setUserTestCreated] = useState()
    const {
        userState: { userInfo },
    } = useUser()

    const createUserTest = async (testId: number) => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken && userInfo.sub)
            try {
                setIsCreatingUserTest(true)
                const res = await createUserTestService(
                    authToken,
                    userInfo.sub,
                    testId
                )
                setUserTestCreated(res)
                setIsCreatingUserTest(false)
                return true
            } catch (err) {
                console.error(err)
                return false
            }
    }
    return { createUserTest, isCreatingUserTest, UserTestCreated }
}

export default useCreateUserTest
