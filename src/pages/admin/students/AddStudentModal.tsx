import { FC } from 'react'

interface AddStudentInterface {
    handleAddStudentModal: () => void
}

const AddStudentModal: FC<AddStudentInterface> = ({
    handleAddStudentModal,
}) => {
    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                    <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                        <p className="text-lg">Ajouter un Étudiant</p>
                        <img
                            src="/assets/icons/ic_close.png"
                            className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                            onClick={handleAddStudentModal}
                        />
                    </div>
                    <div>
                        <p className="font-Marge mt-8 text-sm">Nom :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        />
                        <p className="font-Marge mt-4 text-sm">Prénom :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        />
                        <p className="font-Marge mt-4 text-sm">Niveau :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        />

                        <div className="mt-8 rounded-md bg-purple bg-opacity-30 p-4">
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
                                className="mt-2 h-10 w-full rounded-md bg-primaryDark-background px-2"
                            />
                            <p className="font-Marge mt-4 text-sm">
                                Mot de passe :
                            </p>
                            <input
                                type="password"
                                className="mt-2 h-10 w-full rounded-md bg-primaryDark-background px-2"
                            />
                        </div>
                        <div className="mt-8 flex items-center">
                            <div
                                className="w-full cursor-pointer rounded-xl bg-[#ff2b69] px-6 py-2.5 text-center"
                                onClick={handleAddStudentModal}
                            >
                                <p>Ajouter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudentModal
