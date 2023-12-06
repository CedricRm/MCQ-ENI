import { useState } from 'react'
import {
    modifyTest as modifyTestService,
    switchTestToDone as switchTestToDoneService,
    switchTestToVisible as switchTestToVisibleService,
} from '../../services/test'
import { test } from '../../utils/interfaces'

const useModifyTest = () => {
    const [isModifyingTest, setIsModifyingTest] = useState(false)
    const authToken = localStorage.getItem('@mcqENI.token')

    const modifyTest = async (data: test) => {
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

    const switchTestToDone = async (testSlug: string, isdone: boolean) => {
        if (authToken && testSlug)
            try {
                setIsModifyingTest(true)
                await switchTestToDoneService(authToken, testSlug, isdone)
                setIsModifyingTest(false)
                return true
            } catch (err) {
                console.error(err)
                return false
            }
    }

    const switchTestToVisible = async (
        testSlug: string,
        isvisible: boolean
    ) => {
        if (authToken && testSlug)
            try {
                setIsModifyingTest(true)
                await switchTestToVisibleService(authToken, testSlug, isvisible)
                setIsModifyingTest(false)
                return true
            } catch (err) {
                console.error(err)
                return false
            }
    }

    return {
        modifyTest,
        switchTestToDone,
        switchTestToVisible,
        isModifyingTest,
    }
}

export default useModifyTest
