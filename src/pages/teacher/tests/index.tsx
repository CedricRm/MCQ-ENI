import { FC, useState } from 'react'
import Sidebar from '../Sidebar'
import Searchbar from '../Searchbar'
import AddProfessorModal from './AddTestModal'
import TestsList from './TestsList'
import ModifyTestModal from './ModifyTestModal'
import { processedTest } from '../../../utils/interfaces'
import DeleteTestModal from './DeleteTestModal'

const Index: FC = () => {
    const [showAddTestModal, setShowAddTestModal] = useState(false)
    const [showModifyTestModal, setShowModifyModal] = useState(false)
    const [showDeleteTestModal, setShowDeleteModal] = useState(false)
    const [selectedTest, setSelectedTest] = useState<processedTest>({})

    const handleAddTestModal = () => {
        setShowAddTestModal(!showAddTestModal)
    }

    const handleModifyTestModal = (test?: processedTest) => {
        if (test) {
            setSelectedTest(test)
        }

        setShowModifyModal(!showModifyTestModal)
    }

    const handleDeleteTestModal = (test?: processedTest) => {
        if (test) {
            setSelectedTest(test)
        }

        setShowDeleteModal(!showDeleteTestModal)
    }

    return (
        <div className="bg-primaryDark-background text-white">
            <div className="relative h-[100vh] overflow-hidden">
                <div className="flex">
                    <Sidebar />
                    <div className="w-full">
                        <Searchbar />
                        <div className="relative flex w-full flex-col gap-8 p-8">
                            <div className="flex w-full justify-between">
                                <p className="text-3xl">Tests</p>
                                <button
                                    className="bg-red px-4 py-2"
                                    onClick={handleAddTestModal}
                                >
                                    Ajouter
                                </button>
                            </div>

                            <TestsList
                                handleDeleteTestModal={handleDeleteTestModal}
                                handleModifyTestModal={handleModifyTestModal}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {showAddTestModal && (
                <AddProfessorModal handleAddTestModal={handleAddTestModal} />
            )}

            {showModifyTestModal && (
                <ModifyTestModal
                    test={selectedTest}
                    handleModifyTestModal={handleModifyTestModal}
                />
            )}

            {showDeleteTestModal && (
                <DeleteTestModal
                    test={selectedTest}
                    handleDeleteTestModal={handleDeleteTestModal}
                />
            )}
        </div>
    )
}

export default Index
