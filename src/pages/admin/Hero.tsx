import { FC } from 'react'

const Hero: FC = () => {
    return (
        <div className="flex w-full items-center gap-3 ">
            <div className="flex-1">
                <div className="relative cursor-pointer overflow-hidden rounded-xl bg-white bg-opacity-10 p-4 backdrop-blur-md">
                    <div className="flex flex-1 items-center gap-3">
                        <div className="rounded-xl bg-purple bg-opacity-50 p-2">
                            <img
                                src="./assets/icons/ic_professor.png"
                                alt="Subject list"
                                className="h-5"
                            />
                        </div>
                        <p className="z-50">12 professeurs</p>
                    </div>
                </div>
                <div className="mt-6 h-[0.10rem] w-full bg-white opacity-10"></div>
            </div>
            <div className="flex-1">
                <div className="relative cursor-pointer overflow-hidden rounded-xl bg-white bg-opacity-10 p-4 backdrop-blur-md">
                    <div className="flex flex-1 items-center gap-3">
                        <div className="rounded-xl bg-purple bg-opacity-50 p-2">
                            <img
                                src="./assets/icons/ic_student.png"
                                alt="Subject list"
                                className="h-5"
                            />
                        </div>
                        <p className="z-50">12 étudiants</p>
                    </div>
                </div>
                <div className="mt-6 h-[0.10rem] w-full bg-white opacity-10"></div>
            </div>
            <div className="flex-1">
                <div className="relative cursor-pointer overflow-hidden rounded-xl bg-white bg-opacity-10 p-4 backdrop-blur-md">
                    <div className="flex flex-1 items-center gap-3">
                        <div className="rounded-xl bg-purple bg-opacity-50 p-2">
                            <img
                                src="./assets/icons/ic_test.png"
                                alt="Subject list"
                                className="h-5"
                            />
                        </div>
                        <p className="z-50">12 tests</p>
                    </div>
                </div>
                <div className="mt-6 h-[0.10rem] w-full bg-white opacity-10"></div>
            </div>
        </div>
    )
}

export default Hero
