import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LittleCircleForms from '../../components/LittleCircleForms'
import useLogOut from '../../hooks/auth/useLogOut'

const Sidebar: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname
    const { logout } = useLogOut()

    const handleRedirect = () => {
        navigate('/')
    }

    const handleLogOut = () => {
        logout()
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
                <li
                    className={`hover:bg-gray-700 cursor-pointer px-4 py-2 ${
                        pathname === '/admin' ? 'text-red' : 'hover:text-red'
                    }`}
                    onClick={() => navigate('/admin')}
                >
                    Mon dashboard
                </li>
                <li
                    className={`hover:bg-gray-700 cursor-pointer px-4 py-2 hover:text-red ${
                        pathname === '/admin/professors'
                            ? 'text-red'
                            : 'hover:text-red'
                    }`}
                    onClick={() => navigate('/admin/professors')}
                >
                    Professeurs
                </li>
                <li
                    className={`hover:bg-gray-700 cursor-pointer px-4 py-2 hover:text-red ${
                        pathname === '/admin/students'
                            ? 'text-red'
                            : 'hover:text-red'
                    }`}
                    onClick={() => navigate('/admin/students')}
                >
                    Etudiants
                </li>
                {/* <li
                    className={`hover:bg-gray-700 cursor-pointer px-4 py-2 hover:text-red ${
                        pathname === '/admin/tests'
                            ? 'text-red'
                            : 'hover:text-red'
                    }`}
                >
                    Tests
                </li> */}
            </ul>
            <div
                className="absolute bottom-0 flex cursor-pointer items-center px-4 py-8 hover:text-red"
                onClick={handleLogOut}
            >
                <img
                    src="/assets/icons/ic_logout.png"
                    alt="Log Out"
                    className="h-8 w-8"
                />
                <p>Se déconnecter</p>
            </div>
            <LittleCircleForms className="absolute -left-[6rem] top-[20rem] z-10 flex justify-center" />
        </div>
    )
}

export default Sidebar
