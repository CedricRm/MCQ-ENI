import { FC, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import CircleForms from '../../components/CircleForms'
import LoginModal from './LoginModal'

const Home: FC = () => {
    const [showLoginModal, setShowLoginModal] = useState(false)

    const handleLoginModal = () => {
        setShowLoginModal(!showLoginModal)
    }

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
