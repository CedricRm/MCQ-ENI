import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useGetTests from '../../hooks/test/useGetTests'
import { processedTest } from '../../utils/interfaces'

const SubjetsList: FC = () => {
    const { getAllTests, allTests } = useGetTests()
    const navigate = useNavigate()

    useEffect(() => {
        getAllTests()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRedirectToTest = (test: processedTest) => {
        navigate(`test/${test.slug}`)
    }

    return (
        <div className="mt-4 flex w-full flex-wrap gap-4">
            {allTests.length === 0 ? (
                <p className="text-xs font-light text-white text-opacity-50">
                    Aucun test disponible pour le moment
                </p>
            ) : (
                allTests.map((test) => (
                    <div
                        className="relative flex w-[46%] cursor-pointer flex-col overflow-hidden rounded-xl bg-secondaryDark-background px-2.5 py-8 hover:bg-red hover:transition-colors"
                        key={test.id}
                        onClick={() => handleRedirectToTest(test)}
                    >
                        <p className="text-xl font-semibold text-red">
                            {test.designation}
                        </p>
                        <p className="text-white text-opacity-40">
                            {test.subject}
                        </p>
                        <p className="text-white text-opacity-40">
                            {test.duration} mn
                        </p>
                        <div className="absolute -top-4 right-4 h-8 w-8 rounded-full bg-red"></div>
                    </div>
                ))
            )}
        </div>
    )
}

export default SubjetsList
