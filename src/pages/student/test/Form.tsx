import { ChangeEvent, FC, useState } from 'react'
import LittleCircleForms from '../../../components/LittleCircleForms'
import { processedQuestion, processedTest } from '../../../utils/interfaces'
import useCreateUserChoice from '../../../hooks/user-choice/useCreateUserChoice'
import Spinner from '../../../components/Spinner'
import useUpdateUserTestState from '../../../hooks/user-test/useUpdateUserTestState'

interface FormInterface {
    updateStep: () => void
    handleFinishTest: () => void
    step: number
    question: processedQuestion
    steps: number
    test: processedTest
}

const Form: FC<FormInterface> = ({
    updateStep,
    steps,
    step,
    question,
    handleFinishTest,
    test,
}) => {
    const { createUserChoice, isCreatingUserChoice } = useCreateUserChoice()
    const [choice, setChoice] = useState<number>()
    const { updateUserTestState } = useUpdateUserTestState()

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setChoice(Number(value))
        // Other logic based on the checkbox value
    }

    const handleSaveAnswer = async () => {
        if (await createUserChoice(Number(choice))) {
            updateStep()
        }
    }

    const handleCompleteTest = async () => {
        if (await createUserChoice(Number(choice))) {
            if (test.slug) {
                if (await updateUserTestState(test.slug)) handleFinishTest()
            }
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="relative flex max-w-4xl flex-col items-center rounded-xl bg-black bg-opacity-50 p-8 text-xl">
                <p className="font-Monolisa text-[1rem] font-semibold">
                    {question.content}
                </p>
                <div className="flex w-full flex-col gap-4 py-8">
                    {question.choices?.map((choice, index) => (
                        <div
                            className="flex items-center justify-start"
                            key={index}
                        >
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value={choice.id}
                                onChange={handleCheckboxChange}
                                className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                            />
                            <label
                                htmlFor="default-checkbox"
                                className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium"
                            >
                                {choice.content}
                            </label>
                        </div>
                    ))}
                </div>
                {!(steps - 2 === step) ? (
                    <div
                        className="relative mt-8 flex cursor-pointer items-center overflow-hidden"
                        onClick={handleSaveAnswer}
                    >
                        <div className="w-60 rounded-xl bg-[#ff2b69] px-6 py-2.5 text-center text-xs">
                            {isCreatingUserChoice ? (
                                <Spinner />
                            ) : (
                                <p>Suivant</p>
                            )}
                        </div>
                        <LittleCircleForms className="absolute -bottom-40 -right-0 left-0 flex justify-center" />
                    </div>
                ) : (
                    <div
                        className="relative mt-8 flex cursor-pointer items-center overflow-hidden"
                        onClick={handleCompleteTest}
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
