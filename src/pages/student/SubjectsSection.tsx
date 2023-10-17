import { FC } from 'react'
import SubjetsList from './SubjetsList'
import LatestTestList from './LatestTestList'

const SubjectsSection: FC = () => {
    return (
        <div className="flex w-full gap-16">
            <div className="flex-1">
                <p className="text-md">Matières disponibles :</p>
                <SubjetsList />
            </div>
            <div className="flex-1">
                <p className="text-md">Tests récents :</p>
                <LatestTestList />
            </div>
        </div>
    )
}

export default SubjectsSection
