import { FC } from 'react'
import LittleCircleForms from '../../components/LittleCircleForms'
import { question } from '../../utils/interfaces'

interface FormInterface {
    updateStep: () => void
    handleFinishTest: () => void
    step: number
    steps: number
    question: question
}

const Form: FC<FormInterface> = ({
    updateStep,
    steps,
    step,
    question,
    handleFinishTest,
}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative flex max-w-4xl flex-col items-center rounded-xl bg-black bg-opacity-50 p-8 text-xl">
                <p className="font-Monolisa text-[1rem] font-semibold">
                    {question.title}
                </p>
                <div className="flex w-full flex-col gap-4 py-8">
                    {question.responses.map((choice, index) => (
                        <div
                            className="flex items-center justify-start"
                            key={index}
                        >
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                            />
                            <label
                                htmlFor="default-checkbox"
                                className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium"
                            >
                                {choice}
                            </label>
                        </div>
                    ))}
                </div>
                {!(steps - 2 === step) ? (
                    <div
                        className="relative mt-8 flex cursor-pointer items-center overflow-hidden"
                        onClick={updateStep}
                    >
                        <div className="w-60 rounded-xl bg-[#ff2b69] px-6 py-2.5 text-center text-xs">
                            <p>Suivant</p>
                        </div>
                        <LittleCircleForms className="absolute -bottom-40 -right-0 left-0 flex justify-center" />
                    </div>
                ) : (
                    <div
                        className="relative mt-8 flex cursor-pointer items-center overflow-hidden"
                        onClick={handleFinishTest}
                    >
                        <div className="w-60 rounded-xl bg-[#ff2b69] px-6 py-2.5 text-center text-xs">
                            <p>Terminer</p>
                        </div>
                        <LittleCircleForms className="absolute -bottom-40 -right-0 left-0 flex justify-center" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form
