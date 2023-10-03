import { FC } from 'react'
import CircleForms from '../home/CircleForms'
import LoginSection from './LoginSection'
import Header from './Header'

const index: FC = () => {
    return (
        <div className="bg-primaryDark-background px-8">
            <div className="relative h-[100vh] overflow-hidden">
                <Header />
                <LoginSection />
                <CircleForms />
            </div>
        </div>
    )
}

export default index
