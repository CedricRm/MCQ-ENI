import { FC, useEffect } from 'react'
import useGetTests from '../../../hooks/test/useGetTests'
import { processedTest } from '../../../utils/interfaces'
import { useNavigate } from 'react-router-dom'

interface TestsListInterface {
    handleDeleteTestModal: (test: processedTest) => void
    handleModifyTestModal: (test: processedTest) => void
}

const TestsList: FC<TestsListInterface> = () => {
    const { getAllTests, allTests } = useGetTests()
    const navigate = useNavigate()

    useEffect(() => {
        getAllTests()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRedirect = (testSlug: string) => {
        navigate(testSlug)
    }

    return (
        <div className="relative overflow-x-auto rounded-xl bg-black bg-opacity-50 p-2 backdrop-blur-md">
            <table className="w-full text-left text-sm text-white rtl:text-right">
                <thead className="bg-blue bg-opacity-50 text-xs uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Désignation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sujet
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Niveau
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Durée
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                            Status
                        </th> */}
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {allTests.length > 0 &&
                        allTests.map((test: processedTest) => (
                            <tr
                                className="dark:bg-gray-800 dark:border-gray-700 cursor-pointer border-b"
                                key={test.slug}
                                onClick={() =>
                                    test.slug && handleRedirect(test.slug)
                                }
                            >
                                <th
                                    scope="row"
                                    className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                                >
                                    {test.designation}
                                </th>
                                <td className="px-6 py-4">{test.subject}</td>
                                <td className="px-6 py-4">
                                    {test.levels?.designation}
                                </td>
                                <td className="px-6 py-4">{test.duration}</td>
                                <td className="px-6 py-4">
                                    {test.datetest?.slice(0, 10)}
                                </td>
                                {/* <td className="px-6 py-4">
                                    <p className="bg-red px-2 py-1 text-center uppercase">
                                        ACTIVE
                                    </p>
                                </td> */}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default TestsList
