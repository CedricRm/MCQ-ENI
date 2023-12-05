import { useState } from 'react'
import { modifyTest as modifyTestService } from '../../services/test'
import { test } from '../../utils/interfaces'

const useModifyTest = () => {
    const [isModifyingTest, setIsModifyingTest] = useState(false)

    const modifyTest = async (data: test) => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken && data.slug)
            try {
                setIsModifyingTest(true)
                await modifyTestService(authToken, data.slug, data)
                setIsModifyingTest(false)
                return true
            } catch (err) {
                console.error(err)
                return false
            }
    }
    return { modifyTest, isModifyingTest }
}

export default useModifyTest
