import { useState } from 'react'
import { createTest as createTestService } from '../../services/test'
const useCreateTest = () => {
    const [isCreatingTest, setIsCreatingTest] = useState(false)

    const createTest = async (data: object) => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken)
            try {
                setIsCreatingTest(true)
                await createTestService(authToken, data)
                setIsCreatingTest(false)
                return true
            } catch (err) {
                console.error(err)
                return false
            }
    }
    return { createTest, isCreatingTest }
}

export default useCreateTest
