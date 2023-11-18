import { FC } from 'react'
import LittleCircleForms from '../../components/LittleCircleForms'
import { useNavigate } from 'react-router-dom'

const FinishedTest: FC = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/student')
    }

    return (
        <div className="flex items-center justify-center">
            <div className="min-w-82 relative flex flex-col items-center rounded-xl bg-black bg-opacity-50 p-8 text-xl">
                <p className="mb-4 text-[2rem] font-semibold text-red">
                    BRAVO! 🎉
                </p>
                <p className="font-Monolisa text-xs font-semibold">
                    Test effectué avec succès !
                </p>
                <img
                    src="/assets/img/img_3d_joyful_man.png"
                    alt="joyful man"
                    className="my-8 w-36"
                />
                <p className="text-xs text-white text-opacity-50">
                    Vous allez recevoir le résultat dans quelques minutes.{' '}
                    <br />
                    Restez à l'afut de votre adresse email.
                </p>

                <div
                    className="relative mt-4 flex cursor-pointer items-center overflow-hidden"
                    onClick={handleRedirect}
                >
                    <div className="w-60 rounded-xl bg-purple px-6 py-2.5 text-center text-xs">
                        <p>Retourner à la page d'accueil</p>
                    </div>
                    <LittleCircleForms className="absolute -bottom-40 -right-0 left-0 flex justify-center" />
                </div>
            </div>
        </div>
    )
}

export default FinishedTest
