import { FC } from 'react'
import { processedQuestion, processedTest } from '../../../utils/interfaces'

interface HeaderProps {
    isTestStarted: boolean
    isTestFinished: boolean
    seconds: number
    minutes: number
    test: processedTest
    questions: processedQuestion[]
}

const Header: FC<HeaderProps> = ({
    isTestStarted,
    isTestFinished,
    seconds,
    minutes,
    test,
    questions,
}) => {
    return (
        <div className="relative flex w-full flex-col gap-8">
            <div className="flex w-full items-center justify-between">
                <div className="relative flex-1">
                    <div className="absolute left-0 top-0 opacity-10">
                        <img
                            src="/assets/icons/ic_test.png"
                            alt="Java"
                            className="h-14 w-14"
                        />
                    </div>
                    <p className="mt-2 pl-8 text-3xl font-semibold text-white">
                        {test.designation}
                    </p>
                    <p className="pl-8 text-sm text-white text-opacity-40">
                        {test.subject}
                    </p>
                </div>
                {!isTestStarted && !isTestFinished ? (
                    <div className="flex-1 text-right text-xs">
                        <p className="mt-4">
                            Nombre de questions :{' '}
                            <span className="font-semibold text-red">
                                {questions.length}
                            </span>
                        </p>
                        <p className="mt-2">
                            Temps limite :{' '}
                            <span className="font-semibold text-red">
                                {test.duration} mn
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="mt-4 flex flex-1 justify-end">
                        <div
                            className={`flex h-12 w-36 items-center justify-center gap-2 rounded-2xl ${
                                minutes <= 1
                                    ? 'animate-pulse bg-red'
                                    : 'bg-purple'
                            } p-4 text-2xl tracking-wider text-white`}
                        >
                            <span>{minutes}</span>
                            <span>:</span>
                            <span>{seconds}</span>
                        </div>
                    </div>
                )}
            </div>
            {/* <div className="font-Monolisa text-sm">
                <p>
                    Évaluation composée de{' '}
                    <span className="text-md font-extrabold text-purple">
                        20 questions{' '}
                    </span>
                    à compléter en{' '}
                    <span className="text-md font-extrabold text-purple">
                        10 minutes
                    </span>
                </p>
                <p className="mt-1.5">
                    Ici, vous pouvez voir la liste des tests qui sont
                    disponibles avec les temps imparties pour chacun d'eux
                </p>
            </div> */}
        </div>
    )
}

export default Header
