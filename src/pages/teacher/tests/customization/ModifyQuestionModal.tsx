import { FC, MouseEvent, useState } from 'react'
import Spinner from '../../../../components/Spinner'
import {
    processedChoice,
    processedQuestion,
    processedTest,
} from '../../../../utils/interfaces'
import useUpdateQuestion from '../../../../hooks/question/useUpdateQuestion'
import useRemoveChoice from '../../../../hooks/question/useRemoveChoice'
import useRemoveQuestion from '../../../../hooks/question/useRemoveQuestion'

interface ModifyQuestionModalInterface {
    handleModifyQuestionModal: () => void
    test: processedTest
    question: processedQuestion
}

const ModifyQuestionModal: FC<ModifyQuestionModalInterface> = ({
    handleModifyQuestionModal,
    test,
    question,
}) => {
    const [questionTitle, setQuestionTitle] = useState(question.content)
    const [choices, setChoices] = useState<processedChoice[]>(
        question.choices && question.choices.length > 0 ? question.choices : []
    )
    // for each block of question
    const [responseTitle, setResponseTitle] = useState('')
    const [responseChoice, setResponseChoice] = useState(true)

    const { updateQuestion, isUpdatingQuestion } = useUpdateQuestion()
    const { removeChoiceById } = useRemoveChoice()
    const { removeQuestionToChoice } = useRemoveQuestion()

    const createResponse = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()

        if (responseTitle === '') {
            return
        }

        // Create a new response object
        const newResponse = {
            content: responseTitle,
            iscorrect: responseChoice,
        }

        // Update the list of choices
        setChoices((choices) => [...choices, newResponse])

        // Reset the response fields
        setResponseTitle('')
        setResponseChoice(true)
    }

    const handleDeleteChoice = async (choiceToDelete: processedChoice) => {
        // remove choice inside the choices list
        setChoices((prevChoices) =>
            prevChoices.filter((choice) => choice !== choiceToDelete)
        )

        if (choiceToDelete.id) {
            // remove choice in the database
            await removeChoiceById(choiceToDelete.id)
        }
    }

    const handleUpdateQuestion = async (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()

        const data = {
            content: questionTitle,
            test: test.id,
            choices,
        }

        if (question.id) {
            if (await updateQuestion(question.id, data)) {
                window.location.reload()
            }
        }
    }

    const handleRemoveQuestion = async (e: MouseEvent<HTMLImageElement>) => {
        e.stopPropagation()

        if (question.id) {
            if (await removeQuestionToChoice(question.id)) {
                window.location.reload()
            }
        }
    }

    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 py-4 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                    <div className="relative border-b-2 border-white border-opacity-5 pb-8">
                        <img
                            src="/assets/icons/ic_trash.png"
                            className="absolute right-8 top-0 z-30 h-5 cursor-pointer"
                            onClick={(e) => handleRemoveQuestion(e)}
                        />
                        <img
                            src="/assets/icons/ic_close.png"
                            className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                            onClick={() => handleModifyQuestionModal()}
                        />
                    </div>
                    <div>
                        <textarea
                            className={`text-md mt-2 h-12 w-full border-b-2 border-white border-opacity-20 ${
                                choices.length > 0
                                    ? 'bg-purple'
                                    : 'bg-primaryDark-background'
                            } p-2`}
                            name="content"
                            onChange={(e) => setQuestionTitle(e.target.value)}
                            required
                            placeholder="Titre"
                            value={questionTitle}
                        />
                        <p className="font-Marge text-md mt-4">
                            Choix de réponse :
                        </p>
                        {choices.length === 0 ? (
                            <p className="font-Marge mt-4 text-xs">
                                Aucune réponse pour l'instant
                            </p>
                        ) : (
                            choices.map((choice: processedChoice, key) => (
                                <div
                                    className="mt-4 flex w-full justify-between px-4"
                                    key={key}
                                >
                                    <div className="flex gap-4">
                                        <p className="font-Marge text-md">
                                            <span>{key + 1}</span>
                                            <span className="mx-4">-</span>
                                            <span>{choice.content}</span>
                                        </p>
                                        {choice.iscorrect ? (
                                            <p>✅</p>
                                        ) : (
                                            <p>❌</p>
                                        )}
                                    </div>
                                    <div>
                                        <p
                                            className="cursor-pointer text-xs text-red"
                                            onClick={() =>
                                                handleDeleteChoice(choice)
                                            }
                                        >
                                            Supprimer
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className="mt-14 bg-light-blue bg-opacity-10 p-1 px-4">
                            <p className="font-Marge my-2 text-xs">
                                Composer une réponse
                            </p>
                            <div className="flex gap-4">
                                <textarea
                                    className="mt-2 h-16 w-[75%] border-b-2 border-white border-opacity-20 bg-primaryDark-background p-2 text-xs"
                                    onChange={(e) =>
                                        setResponseTitle(e.target.value)
                                    }
                                    required
                                    placeholder="Titre"
                                />
                                <div className="my-2 flex h-16 flex-auto flex-col justify-center">
                                    <div className="flex items-center">
                                        <input
                                            id="true-response"
                                            type="checkbox"
                                            className="h-4 w-4 rounded-full"
                                            checked={responseChoice === true}
                                            onChange={() =>
                                                setResponseChoice(
                                                    !responseChoice
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="true-response"
                                            className="ms-2 text-xs font-medium"
                                        >
                                            Vrai
                                        </label>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <input
                                            id="false-response"
                                            type="checkbox"
                                            className="h-4 w-4 rounded-full"
                                            checked={responseChoice === false}
                                            onChange={() =>
                                                setResponseChoice(
                                                    !responseChoice
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="false-response"
                                            className="ms-2 text-xs font-medium"
                                        >
                                            Faux
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center">
                                <button
                                    className="mb-2 flex w-full cursor-pointer items-center justify-center rounded-xl bg-light-blue px-6 py-2 text-center text-xs"
                                    onClick={(e) => createResponse(e)}
                                >
                                    Ajouter
                                </button>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="mt-4 text-xs font-light text-white text-opacity-50">
                                Composer vos réponses en répondant par 'VRAI' ou
                                'FAUX' sur chacun d'eux. <br />
                                Ensuite, créer la question pour les valider.
                            </p>
                            <div className="mt-2 flex items-center">
                                <button
                                    className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-red px-6 py-2.5 text-center"
                                    disabled={isUpdatingQuestion}
                                    onClick={(e) => handleUpdateQuestion(e)}
                                >
                                    {!isUpdatingQuestion ? (
                                        <p>Modifier</p>
                                    ) : (
                                        <Spinner />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModifyQuestionModal
