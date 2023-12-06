import { useEffect, useState } from 'react'
import useGetTests from '../../../../hooks/test/useGetTests'
import Sidebar from '../../Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import AddQuestionModal from './AddQuestionModal'
import QuestionsLists from './QuestionsLists'
import ModifyQuestionModal from './ModifyQuestionModal'
import { processedQuestion } from '../../../../utils/interfaces'

const Index = () => {
    const { slug } = useParams()
    const { getTestBySlug, test } = useGetTests()

    const [showAddQuestionModal, setShowAddQuestionModal] = useState(false)
    const [showModifyQuestionModal, setShowModifyQuestionModal] =
        useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState<processedQuestion>(
        {}
    )

    const navigate = useNavigate()

    useEffect(() => {
        if (slug) getTestBySlug(slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRedirect = () => {
        navigate(-1)
    }

    const handleAddQuestionModal = () => {
        setShowAddQuestionModal(!showAddQuestionModal)
    }

    const handleModifyQuestionModal = (question?: processedQuestion) => {
        if (question) {
            setSelectedQuestion(question)
        }

        setShowModifyQuestionModal(!showModifyQuestionModal)
    }

    return (
        <div className="bg-primaryDark-background text-white">
            <div className="relative h-[100vh] overflow-hidden">
                <div className="flex">
                    <Sidebar />
                    <div className="w-full p-4">
                        <div className="relative flex h-56 w-full items-center overflow-hidden rounded-xl bg-purple p-4">
                            <div className="absolute -bottom-8">
                                <p className="font-Gilroy text-[8rem] text-white text-opacity-5">
                                    {test.designation}
                                </p>
                            </div>
                            <div className="relative p-8">
                                <p className="mb-2 text-xs">
                                    <span
                                        className="cursor-pointer text-white text-opacity-25"
                                        onClick={handleRedirect}
                                    >
                                        Mes tests /
                                    </span>{' '}
                                    {slug}
                                </p>
                                <p className="font-Gilroy text-3xl ">
                                    {test.designation}
                                </p>
                            </div>
                            <div className="shadow-xs absolute right-12 w-52 rounded-xl bg-white bg-opacity-10 p-4 text-[1.15rem]">
                                <p>{test.levels?.designation}</p>
                                <p>{test.duration} mn</p>
                                <p>{test.datetest?.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div className="mx-4 my-6 text-xs">
                            <div className="flex items-center gap-4">
                                <p className="text-3xl">Questions</p>
                                <div
                                    className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-xl bg-red text-xl"
                                    onClick={handleAddQuestionModal}
                                >
                                    <p>+</p>
                                </div>
                            </div>
                        </div>
                        <QuestionsLists
                            test={test}
                            handleModifyQuestionModal={
                                handleModifyQuestionModal
                            }
                        />
                        {/* <div className="mx-4 mb-6 mt-12 text-xs">
                            <div className="flex items-center gap-4">
                                <p className="text-3xl">Participants</p>
                                <div
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-purple text-xl"
                                    onClick={handleAddQuestionModal}
                                >
                                    <img
                                        src="/assets/img/img_3d_working_man.png"
                                        alt="working man"
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {showAddQuestionModal && (
                <AddQuestionModal
                    handleAddQuestionModal={handleAddQuestionModal}
                    test={test}
                />
            )}

            {showModifyQuestionModal && (
                <ModifyQuestionModal
                    handleModifyQuestionModal={handleModifyQuestionModal}
                    test={test}
                    question={selectedQuestion}
                />
            )}
        </div>
    )
}

export default Index
