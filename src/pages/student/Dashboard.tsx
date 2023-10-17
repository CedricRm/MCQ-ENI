import { FC } from 'react'
import RightCircleForms from '../../components/RightCircleForms'
import Tutorial from './Tutorial'
import SubjectsSection from './SubjectsSection'

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
                    disponibles par matière avec les temps imparties pour chacun
                    d'eux
                </p>
            </div>
            <Tutorial />
            <SubjectsSection />
            <RightCircleForms />
        </div>
    )
}

export default Dashboard
