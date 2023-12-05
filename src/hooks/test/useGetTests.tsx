import { useState } from 'react'
import { getAllTests } from '../../services/test'

const useGetTests = () => {
    const [isGettingTests, setIsGettingTests] = useState(false)
    const [tests, setTests] = useState([])

    const getTests = async () => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken)
            try {
                setIsGettingTests(true)
                const res = await getAllTests(authToken)
                setTests(res)
                setIsGettingTests(false)
            } catch (err) {
                console.error(err)
                setIsGettingTests(true)
            }
    }
    return { getTests, tests, isGettingTests }
}

export default useGetTests
