import { FC } from 'react'
import LeftCircleForms from '../../components/LeftCircleForms'
import { useNavigate } from 'react-router-dom'

const Sidebar: FC = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/')
    }

    return (
        <div className="relative z-50 h-screen w-[20vw] bg-secondaryDark-background py-8">
            <div
                className="mx-auto mb-9 flex cursor-pointer items-center gap-2 font-Gilroy"
                onClick={handleRedirect}
            >
                <div className="relative h-8 w-4 overflow-hidden bg-[#6e7cd2]"></div>
                <p className="text-3xl font-bold text-[#6e7cd2]">
                    ENI
                    <span className="text-white">Quiz</span>
                </p>
            </div>
            <ul>
                <li className="hover:bg-gray-700 px-4 py-2">Mon dashboard</li>
                <li className="hover:bg-gray-700 px-4 py-2">Mes matières</li>
            </ul>
            <div className="absolute bottom-0 flex cursor-pointer items-center px-4 py-8">
                <img
                    src="./assets/icons/ic_logout.png"
                    alt="Log Out"
                    className="h-8 w-8"
                />
                <p>Se déconnecter</p>
            </div>
            <LeftCircleForms />
        </div>
    )
}

export default Sidebar
