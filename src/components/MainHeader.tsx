import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const MainHeader: FC = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div className="relative z-[99]">
            <nav className="bg-primaryDark-background py-2.5 text-white">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-auto items-center gap-2 py-6 font-Gilroy">
                        <div className="relative h-8 w-4 overflow-hidden bg-[#6e7cd2]"></div>
                        <p className="text-3xl font-bold text-[#6e7cd2]">
                            ENI
                            <span className="text-white">Quiz</span>
                        </p>
                    </div>
                    <div className="text-md flex flex-auto items-center justify-center gap-4">
                        <div className="p-2.5">
                            <a href="#">Accueil</a>
                        </div>
                        <div className="p-2.5">
                            <a href="#">Pour les eleves</a>
                        </div>
                        <div className="p-2.5">
                            <a href="#">Pour les enseignants</a>
                        </div>
                    </div>
                    <div className="flex flex-auto items-center justify-end">
                        <div
                            className="cursor-pointer rounded-xl bg-[#ff2b69] px-6 py-2.5"
                            onClick={handleLogin}
                        >
                            <p>Se connecter</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MainHeader
