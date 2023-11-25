import { FC, useState } from 'react'
import Sidebar from '../Sidebar'
import ProfessorsList from './ProfessorsList'
import Searchbar from '../Searchbar'
import AddProfessorModal from './AddProfessorModal'

const Professors: FC = () => {
    const [showAddProfessorModal, setShowAddProfessorModal] = useState(false)

    const handleAddProfessorModal = () => {
        setShowAddProfessorModal(!showAddProfessorModal)
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
                                <p className="text-3xl">Professeurs</p>
                                <button
                                    className="bg-red px-4 py-2"
                                    onClick={handleAddProfessorModal}
                                >
                                    Ajouter
                                </button>
                            </div>

                            <ProfessorsList />
                        </div>
                    </div>
                </div>
            </div>

            {showAddProfessorModal && (
                <AddProfessorModal
                    handleAddProfessorModal={handleAddProfessorModal}
                />
            )}
        </div>
    )
}

export default Professors
