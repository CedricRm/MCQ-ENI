import { useState } from 'react'
import { deleteTest as deleteTestService } from '../../services/test'

const useDeleteTest = () => {
    const [isDeletingTest, setIsDeletingTest] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const deleteTestById = async (testId: number) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            setIsDeletingTest(true)
            await deleteTestService(authToken, testId)
            return true
        } catch (err) {
            console.error(err)
            setIsDeletingTest(true)
            return false
        }
    }

    return { deleteTestById, isDeletingTest }
}

export default useDeleteTest
