import { useState } from 'react'
import { getUserTestByTestSlug as getUserTestByTestSlugService } from '../../services/test'

const useGetUserTest = () => {
    const [isGettingTests, setIsGettingTests] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [userTest, setUserTest] = useState<any>([])

    const getUserTestByTestSlug = async (slug: string) => {
        const authToken = localStorage.getItem('@mcqENI.token')

        if (authToken)
            try {
                setIsGettingTests(true)
                const res = await getUserTestByTestSlugService(authToken, slug)
                setUserTest(res)
                setIsGettingTests(false)
            } catch (err) {
                console.error(err)
                setIsGettingTests(true)
            }
    }

    return { getUserTestByTestSlug, userTest, isGettingTests }
}

export default useGetUserTest
