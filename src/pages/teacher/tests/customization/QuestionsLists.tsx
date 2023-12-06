import { FC, useEffect } from 'react'
import useGetQuestion from '../../../../hooks/question/useGetQuestion'
import { processedQuestion, processedTest } from '../../../../utils/interfaces'

interface questionsListsInterface {
    test: processedTest
    handleModifyQuestionModal: (question: processedQuestion) => void
}

const QuestionsLists: FC<questionsListsInterface> = ({
    test,
    handleModifyQuestionModal,
}) => {
    const { getAllQuestionsByTestSlug, allQuestions } = useGetQuestion()

    useEffect(() => {
        if (test.slug) getAllQuestionsByTestSlug(test.slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [test.slug])

    return (
        <div className="mx-4 flex gap-4">
            {allQuestions.length === 0 ? (
                <p className="text-xs">Aucun question pour l'instant</p>
            ) : (
                allQuestions.map((question: processedQuestion, key) => (
                    <div
                        className="cursor-pointer rounded-xl bg-white p-4 text-black hover:bg-red hover:text-white hover:transition-colors"
                        key={key}
                        onClick={() => handleModifyQuestionModal(question)}
                    >
                        <p>{question.content}</p>
                        <p className="text-black text-opacity-50">
                            {question.choices?.length} réponses
                        </p>
                    </div>
                ))
            )}
        </div>
    )
}

export default QuestionsLists
