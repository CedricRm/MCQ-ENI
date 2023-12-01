import { FC, FormEvent, useState } from 'react'
import useCreateUser from '../../../hooks/user/useCreateUser'
import Spinner from '../../../components/Spinner'
import {
    LEVEL_L1,
    LEVEL_L2,
    LEVEL_L3,
    LEVEL_M1,
    LEVEL_M2,
    ROLE_STUDENT,
} from '../../../utils/constants'

interface AddStudentInterface {
    handleAddStudentModal: () => void
}

const AddStudentModal: FC<AddStudentInterface> = ({
    handleAddStudentModal,
}) => {
    const [step, setStep] = useState(1)
    const [formDatas, setFormDatas] = useState(new FormData())
    const { createUser, isCreatingUser } = useCreateUser()

    const handleStep = () => {
        setStep(step + 1)
    }

    const handleFirstStep = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Append data from the first step to the formDatas object
        const firstStepFormData = new FormData(e.currentTarget)

        for (const [key, value] of firstStepFormData.entries()) {
            formDatas.append(key, value)
        }
        setFormDatas(firstStepFormData)

        // pass to the next step
        handleStep()
    }

    const handleSecondStep = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Append data from the second step to the formDatas object
        const secondStepFormData = new FormData(e.currentTarget)

        for (const [key, value] of secondStepFormData.entries()) {
            formDatas.append(key, value)
        }
        setFormDatas(secondStepFormData)

        const jsonFormDatas = Object.fromEntries(formDatas.entries())
        jsonFormDatas.role = ROLE_STUDENT.toString()

        // register the teacher
        if (await createUser(jsonFormDatas)) {
            window.location.reload()
        }
    }

    const firstStepRender = () => {
        return (
            <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
                <div className="flex h-full items-center justify-center text-white">
                    <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                        <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                            <p className="text-lg">Ajouter un élève</p>
                            <img
                                src="/assets/icons/ic_close.png"
                                className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                                onClick={handleAddStudentModal}
                            />
                        </div>
                        <form onSubmit={(e) => handleFirstStep(e)}>
                            <p className="font-Marge mt-8 text-sm">Nom :</p>
                            <input
                                type="text"
                                name="firstname"
                                className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                                required
                            />
                            <p className="font-Marge mt-4 text-sm">Prénom :</p>
                            <input
                                type="text"
                                name="lastname"
                                className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                                required
                            />
                            <p className="font-Marge mt-4 text-sm">
                                Numéro de matricule :
                            </p>
                            <input
                                type="text"
                                name="registrationnumber"
                                className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                                required
                            />
                            <p className="font-Marge mt-4 text-sm">Niveau :</p>
                            <select
                                name="level"
                                className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                                defaultValue={LEVEL_L1}
                            >
                                <option value={LEVEL_L1}>L1</option>
                                <option value={LEVEL_L2}>L2</option>
                                <option value={LEVEL_L3}>L3</option>
                                <option value={LEVEL_M1}>M1</option>
                                <option value={LEVEL_M2}>M2</option>
                            </select>
                            <p className="font-Marge mt-4 text-sm">
                                Téléphone :
                            </p>
                            <input
                                type="text"
                                name="phone"
                                className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                                required
                            />
                            <div className="mt-8 flex items-center">
                                <button
                                    className="w-full cursor-pointer rounded-xl bg-purple px-6 py-2.5 text-center"
                                    type="submit"
                                >
                                    <p>Continuer</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const secondStepRender = () => {
        return (
            <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
                <div className="flex h-full items-center justify-center text-white">
                    <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                        <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                            <p className="text-lg">Ajouter un professeur</p>
                            <img
                                src="/assets/icons/ic_close.png"
                                className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                                onClick={handleAddStudentModal}
                            />
                        </div>
                        <form
                            className="mt-8 rounded-md bg-purple bg-opacity-30 p-4"
                            onSubmit={(e) => handleSecondStep(e)}
                        >
                            <div className="flex items-center gap-2">
                                <img
                                    src="/assets/icons/ic_key.png"
                                    alt="search icon"
                                    className="h-3 w-3"
                                />
                                <p className="text-xs">Option de connexion</p>
                            </div>
                            <p className="font-Marge mt-4 text-sm">
                                Adresse email :
                            </p>
                            <input
                                type="email"
                                name="email"
                                className="mt-2 h-10 w-full rounded-md bg-primaryDark-background px-2"
                                required
                            />
                            <p className="font-Marge mt-4 text-sm">
                                Mot de passe :
                            </p>
                            <input
                                type="password"
                                name="password"
                                className="mt-2 h-10 w-full rounded-md bg-primaryDark-background px-2"
                                required
                            />
                            <div className="mt-8 flex items-center">
                                <button
                                    className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-red px-6 py-2.5"
                                    type="submit"
                                >
                                    {!isCreatingUser ? (
                                        <p>Ajouter</p>
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

    return step === 1 ? firstStepRender() : secondStepRender()
}

export default AddStudentModal
