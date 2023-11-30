import { FC, FormEvent, useState } from 'react'
import { modifyUser, user } from '../../../utils/interfaces'
import useModifyUser from '../../../hooks/user/useModifyUser'
import Spinner from '../../../components/Spinner'
import { LEVEL_teacher, ROLE_TEACHER } from '../../../utils/constants'

interface ModifyProfessorInterface {
    user: user
    handleModifyProfessorModal: () => void
}

const ModifyProfessorModal: FC<ModifyProfessorInterface> = ({
    user,
    handleModifyProfessorModal,
}) => {
    const [userValue, setUserValue] = useState<user>(user)
    const { isModifyingUser, modifyUser } = useModifyUser()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = e.target.name
        const targetValue = e.target.value

        setUserValue({ ...userValue, [targetName]: targetValue })
    }

    const handleModifyProfessor = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const update: modifyUser = {
            firstname: userValue.firstname,
            lastname: userValue.lastname,
            registrationnumber: userValue.registrationnumber,
            phone: userValue.phone,
            email: userValue.email,
            level: LEVEL_teacher,
            role: ROLE_TEACHER,
        }

        if (await modifyUser(update.registrationnumber, update)) {
            window.location.reload()
        }
    }

    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                    <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                        <p className="text-lg text-red">
                            Modifier {user.firstname} {user.lastname} ?
                        </p>
                        <img
                            src="/assets/icons/ic_close.png"
                            className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                            onClick={handleModifyProfessorModal}
                        />
                    </div>
                    <form onSubmit={(e) => handleModifyProfessor(e)}>
                        <p className="font-Marge mt-8 text-sm">Nom :</p>
                        <input
                            type="text"
                            name="firstname"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            required
                            value={userValue.firstname}
                            onChange={handleInputChange}
                        />
                        <p className="font-Marge mt-4 text-sm">Prénom :</p>
                        <input
                            type="text"
                            name="lastname"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            required
                            value={userValue.lastname}
                            onChange={handleInputChange}
                        />
                        <p className="font-Marge mt-4 text-sm">
                            Numéro de matricule :
                        </p>
                        <input
                            type="text"
                            name="registrationnumber"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            required
                            value={userValue.registrationnumber}
                            onChange={handleInputChange}
                        />
                        <p className="font-Marge mt-4 text-sm">Téléphone :</p>
                        <input
                            type="text"
                            name="phone"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            required
                            value={userValue.phone}
                            onChange={handleInputChange}
                        />
                        <p className="font-Marge mt-4 text-sm">
                            Adresse email :
                        </p>
                        <input
                            type="text"
                            name="email"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            required
                            value={userValue.email}
                            onChange={handleInputChange}
                        />
                        <div className="mt-8 flex items-center gap-2">
                            <button
                                className="flex-1 cursor-pointer rounded-xl bg-purple bg-opacity-70 px-2 py-2"
                                onClick={() => handleModifyProfessorModal()}
                            >
                                Annuler
                            </button>
                            <button
                                className="flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-red px-6 py-2.5 text-center"
                                type="submit"
                                disabled={isModifyingUser}
                            >
                                {!isModifyingUser ? (
                                    <p>Sauvegarder</p>
                                ) : (
                                    <Spinner />
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModifyProfessorModal
