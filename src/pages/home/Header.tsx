import { FC } from 'react'
import useUser from '../../hooks/context/useUser'
import useAuthUser from '../../hooks/auth/useAuthUser'

interface HeaderInterface {
    handleLoginModal: () => void
}

const MainHeader: FC<HeaderInterface> = ({ handleLoginModal }) => {
    const {
        userState: { userInfo },
    } = useUser()
    const { handleRedirectUserByRole } = useAuthUser()

    const handleRedirect = () => {
        handleRedirectUserByRole(userInfo)
    }

    return (
        <div className="relative z-[51]">
            <nav className="bg-primaryDark-background py-2.5 text-white">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-auto items-center gap-2 py-6 font-Gilroy">
                        <div className="relative h-8 w-4 overflow-hidden bg-[#6e7cd2]"></div>
                        <p className="text-3xl font-bold text-[#6e7cd2]">
                            ENI
                            <span className="text-white">Quiz</span>
                        </p>
                    </div>
                    {userInfo && Object.keys(userInfo).length > 0 ? (
                        <div className="flex flex-auto items-center justify-end">
                            <div
                                className="flex cursor-pointer items-center gap-2 px-6 py-2.5"
                                onClick={handleRedirect}
                            >
                                <img
                                    src="/assets/icons/ic_user.png"
                                    alt="user icon"
                                    className="h-8 w-8"
                                />
                                <p>{userInfo.lastname}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-auto items-center justify-end">
                            <div
                                className="cursor-pointer rounded-xl bg-red px-6 py-2.5"
                                onClick={handleLoginModal}
                            >
                                <p>Se connecter</p>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default MainHeader
