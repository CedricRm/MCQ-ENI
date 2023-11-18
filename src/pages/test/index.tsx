import { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from '../../components/Sidebar'
import Header from './Header'
import Introduction from './Introduction'
import Stepper from './Stepper'
import Form from './Form'
import { useTimer } from 'react-timer-hook'
import { questions } from '../../utils/constants'
import FinishedTest from './FinishedTest'

const steps = questions.length + 1

const Index: FC = () => {
    const [isTestStarted, setIsTestStarted] = useState(false)
    const [isTestFinished, setIsTestFinished] = useState(false)
    const [step, setStep] = useState(-1)
    const time = new Date()
    time.setSeconds(time.getSeconds() + 600)
    const { seconds, minutes, start, pause } = useTimer({
        autoStart: false,
        expiryTimestamp: time,
        onExpire: () => console.warn('onExpire called'),
    })

    const updateStep = () => {
        setStep(step + 1)
    }

    const handleStartTest = () => {
        // start countdown
        start()
        // update step
        setIsTestStarted(!isTestStarted)
        updateStep()
    }

    const handleFinishTest = () => {
        // pause countdown
        pause()

        // set test to finished
        setIsTestStarted(!isTestStarted)
        setIsTestFinished(!isTestFinished)
    }

    return (
        <div className="bg-primaryDark-background text-white">
            <div className="relative h-[100vh] overflow-hidden">
                <div className="flex">
                    <Sidebar />
                    <div
                        className={`flex h-[100vh] w-full flex-col justify-between px-8 py-8`}
                    >
                        <Header
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
                                {!isTestStarted && !isTestFinished && (
                                    <Introduction
                                        handleStartTest={handleStartTest}
                                    />
                                )}

                                {isTestStarted && (
                                    <Form
                                        updateStep={updateStep}
                                        step={step}
                                        steps={steps}
                                        question={questions[step]}
                                        handleFinishTest={handleFinishTest}
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
