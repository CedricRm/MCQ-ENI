import { FC } from 'react'
import { user } from '../../utils/interfaces'
import useDeleteUser from '../../hooks/user/useDeleteUser'
import Spinner from '../../components/Spinner'

interface DeleteUserInterface {
    user: user
    handleDeletingUserModal: () => void
}

const DeleteUserModal: FC<DeleteUserInterface> = ({
    user,
    handleDeletingUserModal,
}) => {
    const { deleteUserById, isDeletingUser } = useDeleteUser()

    const handleDeleteUser = async (userId?: number) => {
        if (userId) {
            if (await deleteUserById(userId)) {
                window.location.reload()
            }
        }
    }

    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                    <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                        <p className="text-lg text-red">
                            Supprimer {user.firstname} {user.lastname} ?
                        </p>
                        <img
                            src="/assets/icons/ic_close.png"
                            className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                            onClick={handleDeletingUserModal}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="text-md tex text-white">
                            Supprimer cet utilisateur entrainera la perte de ces
                            données
                        </p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <button
                            className="flex-1 cursor-pointer rounded-xl bg-purple px-2 py-2"
                            onClick={() => handleDeletingUserModal()}
                        >
                            Annuler
                        </button>
                        <button
                            className="flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-red px-2 py-2"
                            onClick={() => handleDeleteUser(user.id)}
                            disabled={isDeletingUser}
                        >
                            {!isDeletingUser ? 'Supprimer' : <Spinner />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteUserModal
