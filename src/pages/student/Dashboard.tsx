import { FC } from 'react'
import Tutorial from './Tutorial'
import SubjectsSection from './SubjectsSection'
import LittleCircleForms from '../../components/LittleCircleForms'

const Dashboard: FC = () => {
    return (
        <div className="relative flex flex-col gap-8 p-8">
            <p className="text-3xl font-semibold">Bonjour Cédric !</p>
            <div className="font-Monolisa text-sm">
                <p>
                    Voici votre{' '}
                    <span className="text-md font-extrabold text-red">
                        DASHBOARD
                    </span>
                    .
                </p>
                <p className="mt-1.5">
                    Ici, vous pouvez voir la liste des tests qui sont
                    disponibles avec les temps imparties pour chacun d'eux
                </p>
            </div>
            <Tutorial />
            <SubjectsSection />
            <LittleCircleForms className="absolute -right-[82rem] bottom-0 left-0 z-10 flex justify-center" />
        </div>
    )
}

export default Dashboard
