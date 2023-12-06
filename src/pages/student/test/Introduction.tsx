import { FC } from 'react'
import LittleCircleForms from '../../../components/LittleCircleForms'
import Spinner from '../../../components/Spinner'

interface IntroductionProps {
    handleStartTest: () => void
    loading: boolean
}

const Introduction: FC<IntroductionProps> = ({ handleStartTest, loading }) => {
    return (
        <div className="ite ms-center    flex justify-center">
            <div className="relative flex w-80 flex-col items-center rounded-xl bg-black bg-opacity-50 p-8 text-xl">
                <p className="font-Monolisa text-[1rem] font-semibold">
                    Prêt(e) à lancer le test ?
                </p>
                <img
                    src="/assets/img/img_3d_working_girl.png"
                    alt="working girl"
                    className="my-4 w-48"
                />
                <div
                    className="relative mt-8 flex cursor-pointer items-center overflow-hidden"
                    onClick={() => handleStartTest()}
                >
                    <div className="flex w-60 items-center justify-center rounded-xl bg-[#ff2b69] px-6 py-2.5 text-center text-xs">
                        {!loading ? <p>Commencer</p> : <Spinner />}
                    </div>
                    <LittleCircleForms className="absolute -bottom-40 -right-0 left-0 flex justify-center" />
                </div>
            </div>
        </div>
    )
}

export default Introduction
