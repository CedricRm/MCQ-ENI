import { FC, useState } from 'react'
import Sidebar from '../Sidebar'
import ProfessorsList from './ProfessorsList'
import Searchbar from '../Searchbar'
import AddProfessorModal from './AddProfessorModal'
import { user } from '../../../utils/interfaces'
import DeleteUserModal from '../DeleteUserModal'
import ModifyProfessorModal from './ModifyProfessorModal'

const Professors: FC = () => {
    const [showAddProfessorModal, setShowAddProfessorModal] = useState(false)
    const [isDeletingUserModalActive, setIsDeletingUserModalActive] =
        useState(false)
    const [isModifyingUserModalActive, setModifyingUserModalActive] =
        useState(false)
    const [selectedUser, setSelectedUser] = useState<user>({})

    const handleAddProfessorModal = () => {
        setShowAddProfessorModal(!showAddProfessorModal)
    }

    const handleDeletingUserModal = (user?: user) => {
        if (user) {
            setSelectedUser(user)
        }

        setIsDeletingUserModalActive(!isDeletingUserModalActive)
    }

    const handleModifyProfessorModal = (user?: user) => {
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
                                <p className="text-3xl">Professeurs</p>
                                <button
                                    className="bg-red px-4 py-2"
                                    onClick={handleAddProfessorModal}
                                >
                                    Ajouter
                                </button>
                            </div>

                            <ProfessorsList
                                handleDeletingUserModal={
                                    handleDeletingUserModal
                                }
                                handleModifyProfessorModal={
                                    handleModifyProfessorModal
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {showAddProfessorModal && (
                <AddProfessorModal
                    handleAddProfessorModal={handleAddProfessorModal}
                />
            )}

            {isDeletingUserModalActive && (
                <DeleteUserModal
                    user={selectedUser}
                    handleDeletingUserModal={handleDeletingUserModal}
                />
            )}

            {isModifyingUserModalActive && (
                <ModifyProfessorModal
                    user={selectedUser}
                    handleModifyProfessorModal={handleModifyProfessorModal}
                />
            )}
        </div>
    )
}

export default Professors
