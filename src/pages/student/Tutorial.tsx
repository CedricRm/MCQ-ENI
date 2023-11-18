import { FC } from 'react'

const Tutorial: FC = () => {
    return (
        <div className="flex items-center gap-3">
            <div>
                <div className="relative overflow-hidden rounded-xl bg-white bg-opacity-10 p-4 backdrop-blur-md">
                    <div className="flex flex-1 items-center gap-3">
                        <img
                            src="./assets/img/img_3d_list_girl.png"
                            alt="Subject list"
                            className="h-20"
                        />
                        <p className="z-50">
                            Choisissez un test parmi ceux qui sont disponibles
                        </p>
                    </div>
                    <div className="absolute -bottom-[1rem] -right-[1rem] z-40 flex h-10 w-10 items-center justify-center rounded-full bg-purple p-10 text-3xl opacity-50">
                        1
                    </div>
                </div>
                <div className="mt-6 h-[0.10rem] w-full bg-white opacity-10"></div>
            </div>
            <div>
                <div className="relative overflow-hidden rounded-xl bg-white bg-opacity-10 p-4 backdrop-blur-md">
                    <div className="flex flex-1 items-center gap-3">
                        <img
                            src="./assets/img/img_3d_working_man.png"
                            alt="Subject list"
                            className="h-20"
                        />
                        <p className="z-50">
                            Complétez votre test pendant le temps imparti
                        </p>
                    </div>
                    <div className="absolute -bottom-[1rem] -right-[1rem] z-40 flex h-10 w-10 items-center justify-center rounded-full bg-purple p-10 text-3xl opacity-50">
                        2
                    </div>
                </div>
                <div className="mt-6 h-[0.10rem] w-full bg-white opacity-10"></div>
            </div>
            <div>
                <div className="relative overflow-hidden rounded-xl bg-white bg-opacity-10 p-4 backdrop-blur-md">
                    <div className="flex flex-1 items-center gap-3">
                        <img
                            src="/assets/img/img_3d_happy_girl.png"
                            alt="Subject list"
                            className="h-20"
                        />
                        <p className="z-50">
                            Recevez le résultat directement sur la plateforme et
                            par email
                        </p>
                    </div>
                    <div className="absolute -bottom-[1rem] -right-[1rem] z-40 flex h-10 w-10 items-center justify-center rounded-full bg-purple p-10 text-3xl opacity-50">
                        3
                    </div>
                </div>
                <div className="mt-6 h-[0.10rem] w-full bg-white opacity-10"></div>
            </div>
        </div>
    )
}

export default Tutorial
