import { FC, FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useAuthUser from '../../hooks/auth/useAuthUser'
import Spinner from '../../components/Spinner'

interface LoginInterface {
    handleLoginModal: () => void
}

const LoginModal: FC<LoginInterface> = ({ handleLoginModal }) => {
    const { logIn, isLoggingIn, loginError } = useAuthUser()

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        await logIn(email, password)
    }

    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="relative z-50 flex h-[40rem] w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6">
                    <img
                        src="/assets/icons/ic_close.png"
                        className="absolute right-5 top-5 z-30 h-5 cursor-pointer"
                        onClick={handleLoginModal}
                    />
                    <div className="absolute -top-10 right-0 z-20 h-24 w-24 bg-[#6e7cd2] blur-2xl"></div>
                    <div className="mx-auto mb-9 mt-4 flex items-center gap-2 font-Gilroy">
                        <div className="relative h-8 w-4 overflow-hidden bg-[#6e7cd2]"></div>
                        <p className="text-[2.5rem] font-bold text-[#6e7cd2]">
                            ENI
                            <span className="text-white">Quiz</span>
                        </p>
                    </div>
                    <p className="font-Gilroy text-[2.5rem] text-white">
                        Te revoilà 👋 !
                    </p>
                    <p className="mt-2 font-Monolisa text-sm">
                        Connecte-toi pour avoir accès à ton interface
                    </p>
                    <form onSubmit={(e) => handleLogin(e)}>
                        <p className="font-Marge mt-8 text-sm">
                            Adresse email :
                        </p>
                        {loginError != null && (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mt-2 flex items-center gap-2">
                                        <img
                                            src="/assets/icons/ic_error.png"
                                            alt="error"
                                            className="h-3 w-3"
                                        />
                                        <p className="font-Monolisa text-xs text-red">
                                            {loginError}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                        <input
                            type="email"
                            className={`mt-2 h-10 w-60 rounded-md ${
                                loginError ? ' border-red' : 'border-white'
                            } border-2 border-opacity-20 bg-primaryDark-background px-2`}
                            name="email"
                        />
                        <p className="font-Marge mt-8 text-sm">
                            Mot de passe :
                        </p>
                        <input
                            type="password"
                            className={`mt-2 h-10 w-60 rounded-md ${
                                loginError ? ' border-red' : 'border-white'
                            } border-2 border-opacity-20 bg-primaryDark-background px-2`}
                            name="password"
                        />
                        <div className="mt-8 flex items-center">
                            <button
                                className="flex w-60 cursor-pointer items-center justify-center rounded-xl bg-[#ff2b69] px-6 py-2.5"
                                type="submit"
                            >
                                {isLoggingIn ? <Spinner /> : <p>Connexion</p>}
                            </button>
                        </div>
                    </form>
                    <div className="absolute bottom-4 right-0">
                        <img
                            src="/assets/img/img_3d_flame_rocket.png"
                            alt="Developer"
                            className="z-40 w-48"
                        />
                    </div>
                    <div className="absolute -bottom-10 left-0 z-20 h-24 w-24 bg-[#6e7cd2] blur-2xl"></div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
