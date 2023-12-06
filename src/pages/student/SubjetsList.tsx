import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGetTests from '../../hooks/test/useGetTests'
import { processedTest } from '../../utils/interfaces'
import useUser from '../../hooks/context/useUser'

const SubjetsList: FC = () => {
    const { getTestByLevelSlug, allTests } = useGetTests()
    const [visibleTests, setVisibleTests] = useState<processedTest[]>([])
    const navigate = useNavigate()
    const {
        userState: { userInfo },
    } = useUser()

    useEffect(() => {
        if (userInfo.level) {
            let userLevel = 'l1'

            switch (userInfo.level) {
                case 1:
                    userLevel = 'l1'
                    break
                case 2:
                    userLevel = 'l2'
                    break
                case 3:
                    userLevel = 'l3'
                    break
                case 4:
                    userLevel = 'm1'
                    break
                case 5:
                    userLevel = 'm2'
                    break
                default:
                    break
            }

            getTestByLevelSlug(userLevel)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo.level])

    useEffect(() => {
        if (allTests && allTests.length > 0) {
            allTests.forEach((test) => {
                if (test.isvisible) {
                    visibleTests.push(test)
                    setVisibleTests((prevVisibleTest) => [
                        ...prevVisibleTest,
                        test,
                    ])
                }
            })
        }
    })

    const handleRedirectToTest = (test: processedTest) => {
        navigate(`test/${test.slug}`)
    }

    return (
        <div className="mt-4 flex w-full flex-wrap gap-4">
            {visibleTests.length === 0 ? (
                <p className="text-xs font-light text-white text-opacity-50">
                    Aucun test disponible pour le moment
                </p>
            ) : (
                visibleTests.map((test) => (
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
