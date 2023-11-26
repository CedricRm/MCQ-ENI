import { FC, useEffect, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import CircleForms from '../../components/CircleForms'
import LoginModal from './LoginModal'
import useVerifyUser from '../../hooks/auth/useVerifyUser'
import useUser from '../../hooks/context/useUser'

const Home: FC = () => {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const { verifyUser } = useVerifyUser()
    const {
        userState: { userInfo },
    } = useUser()
    const authToken = localStorage.getItem('@mcqENI.token')

    const handleLoginModal = () => {
        setShowLoginModal(!showLoginModal)
    }

    useEffect(() => {
        if (authToken && Object.keys(userInfo).length === 0) {
            verifyUser(authToken)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authToken])

    return (
        <div className="relative bg-primaryDark-background px-8">
            <div className="relative h-[100vh] overflow-hidden">
                <Header handleLoginModal={handleLoginModal} />
                <Hero />
                <CircleForms />
                {showLoginModal && (
                    <LoginModal handleLoginModal={handleLoginModal} />
                )}
            </div>
        </div>
    )
}

export default Home
