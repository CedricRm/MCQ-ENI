import { FC, useState } from 'react'
import Sidebar from '../Sidebar'
import Searchbar from '../Searchbar'
import StudentsLists from './StudentsLists'
import AddStudentModal from './AddStudentModal'

const Students: FC = () => {
    const [showAddStudentModal, setShowAddStudent] = useState(false)

    const handleAddStudentModal = () => {
        setShowAddStudent(!showAddStudentModal)
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
                                <p className="text-3xl">Étudiants</p>
                                <button
                                    className="bg-red px-4 py-2"
                                    onClick={handleAddStudentModal}
                                >
                                    Ajouter
                                </button>
                            </div>

                            <StudentsLists />
                        </div>
                    </div>
                </div>
            </div>

            {showAddStudentModal && (
                <AddStudentModal
                    handleAddStudentModal={handleAddStudentModal}
                />
            )}
        </div>
    )
}

export default Students
