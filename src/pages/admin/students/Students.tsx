import { FC, useState } from 'react'
import Sidebar from '../Sidebar'
import Searchbar from '../Searchbar'
import StudentsList from './StudentsList.tsx'
import AddStudentModal from './AddStudentModal'
import { user } from '../../../utils/interfaces.ts'
import DeleteUserModal from '../DeleteUserModal.tsx'
import ModifyStudentModal from './ModifyStudentModal.tsx'

const Students: FC = () => {
    const [showAddStudentModal, setShowAddStudent] = useState(false)
    const [isDeletingUserModalActive, setIsDeletingUserModalActive] =
        useState(false)
    const [isModifyingUserModalActive, setModifyingUserModalActive] =
        useState(false)
    const [selectedUser, setSelectedUser] = useState<user>({})

    const handleAddStudentModal = () => {
        setShowAddStudent(!showAddStudentModal)
    }

    const handleDeletingUserModal = (user?: user) => {
        if (user) {
            setSelectedUser(user)
        }

        setIsDeletingUserModalActive(!isDeletingUserModalActive)
    }

    const handleModifyStudentModal = (user?: user) => {
        if (user) {
            setSelectedUser(user)
        }

        setModifyingUserModalActive(!isModifyingUserModalActive)
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

                            <StudentsList
                                handleDeletingUserModal={
                                    handleDeletingUserModal
                                }
                                handleModifyStudentModal={
                                    handleModifyStudentModal
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {showAddStudentModal && (
                <AddStudentModal
                    handleAddStudentModal={handleAddStudentModal}
                />
            )}

            {isDeletingUserModalActive && (
                <DeleteUserModal
                    user={selectedUser}
                    handleDeletingUserModal={handleDeletingUserModal}
                />
            )}

            {isModifyingUserModalActive && (
                <ModifyStudentModal
                    user={selectedUser}
                    handleModifyStudentModal={handleModifyStudentModal}
                />
            )}
        </div>
    )
}

export default Students
