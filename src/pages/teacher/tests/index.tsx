import { FC, useState } from 'react'
import Sidebar from '../Sidebar'
import Searchbar from '../Searchbar'
import AddProfessorModal from './AddTestModal'
import TestsList from '../TestsList'

const Index: FC = () => {
    const [showAddTestModal, setShowAddTestModal] = useState(false)

    const handleAddTestModal = () => {
        setShowAddTestModal(!showAddTestModal)
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

                            <TestsList />
                        </div>
                    </div>
                </div>
            </div>

            {showAddTestModal && (
                <AddProfessorModal handleAddTestModal={handleAddTestModal} />
            )}
        </div>
    )
}

export default Index
