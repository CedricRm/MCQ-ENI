import { FC } from 'react'

interface AddTestModal {
    handleAddTestModal: () => void
}

const AddTestModal: FC<AddTestModal> = ({ handleAddTestModal }) => {
    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                    <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                        <p className="text-lg">Ajouter un test</p>
                        <img
                            src="/assets/icons/ic_close.png"
                            className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                            onClick={handleAddTestModal}
                        />
                    </div>
                    <div>
                        <p className="font-Marge mt-8 text-sm">Titre :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        />
                        <p className="font-Marge mt-4 text-sm">Niveau :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        />
                        <p className="font-Marge mt-4 text-sm">Durée :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        />

                        <p className="font-Marge mt-4 text-sm">
                            Importer les questions
                        </p>
                        <p className="mt-1 font-Monolisa text-[0.50rem] text-grey-30">
                            <span className="font-bold text-purple">
                                Fichier CSV
                            </span>{' '}
                            contenant les questions ainsi que les réponses.
                            Télécharger le modèle{' '}
                            <a
                                className="cursor-pointer text-red underline"
                                href="#"
                            >
                                ici
                            </a>
                            .
                        </p>
                        <input
                            type="file"
                            className="mt-2 h-6 w-full rounded-md text-sm"
                        />
                        <p className="font-Marge mt-4 text-sm">
                            A afficher le :
                        </p>
                        <input
                            type="date"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        />
                        <div className="mt-8 flex items-center">
                            <div
                                className="w-full cursor-pointer rounded-xl bg-red px-6 py-2.5 text-center"
                                onClick={handleAddTestModal}
                            >
                                <p>Continuer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTestModal
