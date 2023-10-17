import { FC } from 'react'
import MainHeader from '../../components/MainHeader'
import Hero from './Hero'
import CircleForms from '../../components/CircleForms'

const Home: FC = () => {
    return (
        <div className="bg-primaryDark-background px-8">
            <div className="relative h-[100vh] overflow-hidden">
                <MainHeader />
                <Hero />
                <CircleForms />
            </div>
            {/* <div className="h-60 bg-orange">
                <p>Coucou</p>
            </div> */}
        </div>
    )
}

export default Home
