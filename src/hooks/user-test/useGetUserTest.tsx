import { useState } from 'react'
import { getUserTestByTestSlug as getUserTestByTestSlugService } from '../../services/test'

const useGetUserTest = () => {
    const [isGettingTests, setIsGettingTests] = useState(false)
    const [userTest, setUserTest] = useState(true)

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
