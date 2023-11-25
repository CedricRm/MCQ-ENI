import { FC } from 'react'

const StudentsLists: FC = () => {
    return (
        <div className="relative overflow-x-auto rounded-xl bg-black bg-opacity-50 p-2 backdrop-blur-md">
            <table className="w-full text-left text-sm text-white rtl:text-right">
                <thead className="bg-blue bg-opacity-50 text-xs uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Adresse email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Prénom
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Niveau
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
                            test@gmail.com
                        </th>
                        <th
                            scope="row"
                            className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                        >
                            Ra test
                        </th>
                        <th
                            scope="row"
                            className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                        >
                            test
                        </th>
                        <td className="px-6 py-4">M1</td>
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
                            test2@gmail.com
                        </th>
                        <th
                            scope="row"
                            className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                        >
                            Ra test2
                        </th>
                        <th
                            scope="row"
                            className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                        >
                            test2
                        </th>
                        <td className="px-6 py-4">L3</td>
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

export default StudentsLists
