import { FC, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from '../Sidebar'
import Header from './Header'
import Introduction from './Introduction'
import Stepper from './Stepper'
import Form from './Form'
import { useTimer } from 'react-timer-hook'
import FinishedTest from './FinishedTest'
import { useParams } from 'react-router-dom'
import useGetTests from '../../../hooks/test/useGetTests'
import useGetQuestion from '../../../hooks/question/useGetQuestion'
import useCreateUserTest from '../../../hooks/user-test/useCreateUserTest'
import useGetUserTest from '../../../hooks/user-test/useGetUserTest'
import useUser from '../../../hooks/context/useUser'
import DoneTest from './DoneTest'

const Index: FC = () => {
    const { slug } = useParams()
    const { getTestBySlug, test } = useGetTests()
    const { getAllQuestionsByTestSlug, allQuestions } = useGetQuestion()
    const { createUserTest, isCreatingUserTest } = useCreateUserTest()

    const steps = allQuestions.length + 1

    const [showDoneTest, setShowDoneTest] = useState(false)
    const [isTestStarted, setIsTestStarted] = useState(false)
    const [isTestFinished, setIsTestFinished] = useState(false)
    const [step, setStep] = useState(-1)
    const time = new Date()
    time.setSeconds(time.getSeconds() + 600)
    const [timerConfig, setTimerConfig] = useState({
        autoStart: false,
        expiryTimestamp: time,
        onExpire: () => console.warn('onExpire called'),
    })

    const { getUserTestByTestSlug, userTest } = useGetUserTest()

    const {
        userState: { userInfo },
    } = useUser()

    useEffect(() => {
        if (slug) getTestBySlug(slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    useEffect(() => {
        const testDuration = Number(test.duration)

        // attribute test duration to the timer
        if (testDuration && !isNaN(testDuration)) {
            const durationInMilliseconds = testDuration * 60 * 1000
            const time = new Date()
            time.setSeconds(
                time.getSeconds() + Math.floor(durationInMilliseconds / 1000)
            )

            setTimerConfig({
                autoStart: false,
                expiryTimestamp: time,
                onExpire: () => console.warn('onExpire called'),
            })
        } else {
            console.warn('Invalid test.duration:', test.duration)
        }
    }, [test.duration])

    const { seconds, minutes, start, pause } = useTimer(timerConfig)
    useEffect(() => {
        if (test && test.slug) {
            getAllQuestionsByTestSlug(test.slug)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [test])

    const updateStep = () => {
        setStep(step + 1)
    }

    const handleStartTest = async () => {
        // create user test
        if (test.id) {
            if (await createUserTest(test.id)) {
                // start countdown
                start()
                // update step
                setIsTestStarted(!isTestStarted)
                updateStep()
            }
        }
    }

    const handleFinishTest = () => {
        // pause countdown
        pause()

        // set test to finished
        setIsTestStarted(!isTestStarted)
        setIsTestFinished(!isTestFinished)
    }

    useEffect(() => {
        if (slug) {
            getUserTestByTestSlug(slug)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    useEffect(() => {
        if (userTest.length > 0) {
            const filteredTestData = userTest.map((test) => {
                const filteredUsers = test.users.id === userInfo.sub
                return { ...test, users: filteredUsers }
            })

            if (filteredTestData.length > 0) {
                setShowDoneTest(true)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userTest])

    return (
        <div className="bg-primaryDark-background text-white">
            <div className="relative h-[100vh] overflow-hidden">
                <div className="flex">
                    <Sidebar />
                    <div
                        className={`flex h-[100vh] w-full flex-col justify-between px-8 py-8`}
                    >
                        <Header
                            test={test}
                            questions={allQuestions}
                            isTestStarted={isTestStarted}
                            isTestFinished={isTestFinished}
                            seconds={seconds}
                            minutes={minutes}
                        />
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {showDoneTest ? (
                                    <DoneTest />
                                ) : (
                                    !isTestStarted &&
                                    !isTestFinished && (
                                        <Introduction
                                            loading={isCreatingUserTest}
                                            handleStartTest={handleStartTest}
                                        />
                                    )
                                )}

                                {isTestStarted && (
                                    <Form
                                        updateStep={updateStep}
                                        step={step}
                                        steps={steps}
                                        question={allQuestions[step]}
                                        handleFinishTest={handleFinishTest}
                                        test={test}
                                    />
                                )}

                                {isTestFinished && <FinishedTest />}
                            </motion.div>
                        </AnimatePresence>
                        {!isTestFinished ? (
                            <Stepper steps={steps} step={step} />
                        ) : (
                            <div className="h-2 w-20"></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
