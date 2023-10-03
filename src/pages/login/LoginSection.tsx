import { FC } from 'react'

const LoginSection: FC = () => {
    return (
        <div className="flex h-full items-center justify-center text-white">
            <div className="relative z-50 flex h-[40rem] w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6">
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
                <div>
                    <p className="font-Marge mt-8 text-sm">
                        Nom d'utilisateur :
                    </p>
                    <input
                        type="text"
                        className="mt-2 h-10 w-60 rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                    />
                    <p className="font-Marge mt-8 text-sm">Mot de passe :</p>
                    <input
                        type="text"
                        className="mt-2 h-10 w-60 rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                    />
                    <div className="mt-8 flex items-center">
                        <div className="w-60 cursor-pointer rounded-xl bg-[#ff2b69] px-6 py-2.5 text-center">
                            <p>Connexion</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 right-0">
                    <img
                        src="./assets/img/img_3d_flame_rocket.png"
                        alt="Developer"
                        className="z-40 w-48"
                    />
                </div>
                <div className="absolute -bottom-10 left-0 z-20 h-24 w-24 bg-[#6e7cd2] blur-2xl"></div>
            </div>
            {/* <div className="h-full px-4 py-12">
                <p className="font-Gilroy text-[4rem]">Te revoilà :)</p>
                <p className="mt-2 font-Monolisa text-sm">
                    Connecte-toi pour avoir accès à ton interface
                </p>
                <div className=""></div>
                <p className="font-Marge mt-8 text-sm">Nom d'utilisateur :</p>
                <input
                    type="text"
                    className="mt-4 h-10 w-60 rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background"
                />
            </div>
            <div className="flex flex-col items-center">
                <img
                    src="./assets/img/img_3d_casual_girl.png"
                    alt="Developer"
                    className="z-40 w-[25rem]"
                />
                <p className="mt-6 text-center font-Monolisa text-xs leading-5 text-white text-opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                    <br />
                    Magni adipisci tenetur sed id maxime, vel minima molestiae
                    sint doloremque <br /> facere dicta, consequatur quas
                    voluptate!
                </p>
            </div> */}
        </div>
    )
}

export default LoginSection
