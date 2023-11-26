import { FC } from 'react'

const TestsList: FC = () => {
    return (
        <div className="relative overflow-x-auto rounded-xl bg-black bg-opacity-50 p-2 backdrop-blur-md">
            <table className="w-full text-left text-sm text-white rtl:text-right">
                <thead className="bg-blue bg-opacity-50 text-xs uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Titre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Niveau
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nb de questions
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Durée
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Visible le
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="dark:bg-gray-800 dark:border-gray-700 border-b">
                        <th
                            scope="row"
                            className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                        >
                            Initiation en Java
                        </th>
                        <td className="px-6 py-4">M1</td>
                        <td className="px-6 py-4">12</td>
                        <td className="px-6 py-4">10:00</td>
                        <td className="px-6 py-4">26/11/23</td>
                        <td className="px-6 py-4">
                            <p className="bg-red px-2 py-1 text-center uppercase">
                                ACTIVE
                            </p>
                        </td>
                        <td className="flex gap-4 px-6 py-4">
                            <img
                                src="/assets/icons/ic_pen.png"
                                alt="modify icon"
                                className="h-4 w-4 cursor-pointer"
                            />
                            <img
                                src="/assets/icons/ic_erazer.png"
                                alt="modify icon"
                                className="h-5 w-5 cursor-pointer"
                            />
                        </td>
                    </tr>
                    <tr className="dark:bg-gray-800 dark:border-gray-700 border-b">
                        <th
                            scope="row"
                            className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                        >
                            Initiation
                        </th>
                        <td className="px-6 py-4">L2</td>
                        <td className="px-6 py-4">30</td>
                        <td className="px-6 py-4">01:00:00</td>
                        <td className="px-6 py-4">26/11/23</td>
                        <td className="px-6 py-4">
                            <p className="bg-grey-30 px-2 py-1 text-center uppercase">
                                INACTIVE
                            </p>
                        </td>
                        <td className="flex gap-4 px-6 py-4">
                            <img
                                src="/assets/icons/ic_pen.png"
                                alt="modify icon"
                                className="h-4 w-4 cursor-pointer"
                            />
                            <img
                                src="/assets/icons/ic_erazer.png"
                                alt="modify icon"
                                className="h-5 w-5 cursor-pointer"
                            />
                        </td>
                    </tr>
                    <tr className="dark:bg-gray-800 dark:border-gray-700 border-b">
                        <th
                            scope="row"
                            className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                        >
                            Initiation
                        </th>
                        <td className="px-6 py-4">L3</td>
                        <td className="px-6 py-4">30</td>
                        <td className="px-6 py-4">01:00:00</td>
                        <td className="px-6 py-4">26/11/23</td>
                        <td className="px-6 py-4">
                            <p className="bg-green px-2 py-1 text-center uppercase">
                                Terminé
                            </p>
                        </td>
                        <td className="flex gap-4 px-6 py-4">
                            <img
                                src="/assets/icons/ic_pen.png"
                                alt="modify icon"
                                className="h-4 w-4 cursor-pointer"
                            />
                            <img
                                src="/assets/icons/ic_erazer.png"
                                alt="modify icon"
                                className="h-5 w-5 cursor-pointer"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TestsList
