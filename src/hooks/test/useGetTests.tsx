import { useState } from 'react'
import {
    getAllTests as getAllTestsServices,
    getTestBySlug as getTestBySlugService,
} from '../../services/test'
import { processedTest } from '../../utils/interfaces'

const useGetTests = () => {
    const [isGettingTests, setIsGettingTests] = useState(false)
    const [allTests, setAllTests] = useState<processedTest[]>([])
    const [test, setTest] = useState<processedTest>({})

    const getAllTests = async () => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken)
            try {
                setIsGettingTests(true)
                const res = await getAllTestsServices(authToken)
                setAllTests(res)
                setIsGettingTests(false)
            } catch (err) {
                console.error(err)
                setIsGettingTests(true)
            }
    }

    const getTestBySlug = async (slug: string) => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken)
            try {
                setIsGettingTests(true)
                const res = await getTestBySlugService(authToken, slug)
                setTest(res)
                setIsGettingTests(false)
            } catch (err) {
                console.error(err)
                setIsGettingTests(true)
            }
    }

    return { getAllTests, getTestBySlug, allTests, test, isGettingTests }
}

export default useGetTests
