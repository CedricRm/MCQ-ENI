import { ChangeEvent, FC, FormEvent, useState } from 'react'
import {
    LEVEL_L1,
    LEVEL_L2,
    LEVEL_L3,
    LEVEL_M1,
    LEVEL_M2,
} from '../../../utils/constants'
import userModifyTest from '../../../hooks/test/useModifyTest'
import Spinner from '../../../components/Spinner'
import { processedTest, test } from '../../../utils/interfaces'

interface ModifyTestModalInterface {
    handleModifyTestModal: () => void
    test: processedTest
}

const ModifyTestModal: FC<ModifyTestModalInterface> = ({
    handleModifyTestModal,
    test,
}) => {
    const [testValue, setTestValue] = useState<test>({
        designation: test.designation,
        subject: test.subject,
        yeartest: test.yeartest,
        duration: test.duration,
        datetest: test.datetest?.slice(0, 10),
        level: test.levels?.id,
        user: test.users?.id.toString(),
        slug: test.slug,
    })

    const { modifyTest, isModifyingTest } = userModifyTest()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        // Check if the value is a valid number
        const numericValue = Number(value)

        if (!isNaN(numericValue)) {
            setTestValue({ ...testValue, [name]: numericValue })
        } else {
            setTestValue({ ...testValue, [name]: value })
        }
    }

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target

        const numericValue = Number(value)

        setTestValue({ ...testValue, level: numericValue })
    }

    const handleModifyTest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(testValue)

        // create the test
        if (await modifyTest(testValue)) {
            window.location.reload()
        }
    }

    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                    <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                        <p className="text-lg">Modifier</p>
                        <img
                            src="/assets/icons/ic_close.png"
                            className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                            onClick={handleModifyTestModal}
                        />
                    </div>
                    <form onSubmit={(e) => handleModifyTest(e)}>
                        <p className="font-Marge mt-8 text-sm">Désignation :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="designation"
                            value={testValue.designation}
                            onChange={handleChange}
                            required
                        />
                        <p className="font-Marge mt-8 text-sm">Sujet :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="subject"
                            value={testValue.subject}
                            onChange={handleChange}
                            required
                        />
                        <p className="font-Marge mt-4 text-sm">Niveau :</p>
                        <select
                            name="level"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            defaultValue={testValue.level}
                            onChange={handleSelect}
                        >
                            <option value={LEVEL_L1}>L1</option>
                            <option value={LEVEL_L2}>L2</option>
                            <option value={LEVEL_L3}>L3</option>
                            <option value={LEVEL_M1}>M1</option>
                            <option value={LEVEL_M2}>M2</option>
                        </select>
                        <p className="font-Marge mt-4 text-sm">Durée (mn) :</p>
                        <input
                            type="number"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="duration"
                            value={testValue.duration}
                            onChange={handleChange}
                            required
                        />
                        <p className="font-Marge mt-4 text-sm">
                            Date du test :
                        </p>
                        <input
                            type="date"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="datetest"
                            value={testValue.datetest}
                            onChange={handleChange}
                            required
                        />
                        {/* <p className="font-Marge mt-4 text-sm">
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
                        </p> */}
                        {/* <input
                            type="file"
                            className="mt-2 h-6 w-full rounded-md text-sm"
                        />
                        <p className="font-Marge mt-4 text-sm">
                            A afficher le :
                        </p> */}
                        {/* <input
                            type="date"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        /> */}
                        <div className="mt-8 flex items-center">
                            <button
                                className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-red px-6 py-2.5 text-center"
                                type="submit"
                                disabled={isModifyingTest}
                            >
                                {!isModifyingTest ? (
                                    <p>Modifer</p>
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

export default ModifyTestModal
