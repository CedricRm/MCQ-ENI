import { FC, useEffect } from 'react'
import useGetUsers from '../../../hooks/user/useGetUsers'
import { processedUser } from '../../../utils/interfaces'

interface StudentsListInterface {
    handleDeletingUserModal: (user: processedUser) => void
    handleModifyStudentModal: (user: processedUser) => void
}

const StudentsList: FC<StudentsListInterface> = ({
    handleDeletingUserModal,
    handleModifyStudentModal,
}) => {
    const { filterUsers, users } = useGetUsers()

    useEffect(() => {
        const filter = {
            searchRole: 'student',
        }

        filterUsers(filter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="relative overflow-x-auto rounded-xl bg-black bg-opacity-50 p-2 backdrop-blur-md">
            <table className="w-full text-left text-sm text-white rtl:text-right">
                <thead className="bg-blue bg-opacity-50 text-xs uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            N° matricule
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Prénom
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Niveau
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Téléphone
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                            Niveau
                        </th> */}
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? (
                        users.map((user: processedUser) => (
                            <tr
                                className="dark:bg-gray-800 dark:border-gray-700 border-b"
                                key={user.registrationnumber}
                            >
                                <th
                                    scope="row"
                                    className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                                >
                                    {user.registrationnumber}
                                </th>
                                <td className="px-6 py-4">{user.firstname}</td>
                                <td className="px-6 py-4">{user.lastname}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    {user.levels?.designation}
                                </td>
                                <td className="px-6 py-4">{user.phone}</td>
                                <td className="flex gap-4 px-6 py-4">
                                    <img
                                        src="/assets/icons/ic_pen.png"
                                        alt="modify icon"
                                        className="h-4 w-4 cursor-pointer"
                                        onClick={() =>
                                            handleModifyStudentModal(user)
                                        }
                                    />
                                    <img
                                        src="/assets/icons/ic_erazer.png"
                                        alt="delete icon"
                                        className="h-5 w-5 cursor-pointer"
                                        onClick={() =>
                                            handleDeletingUserModal(user)
                                        }
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="py-4 text-center">
                                Aucun utilisateur
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsList
