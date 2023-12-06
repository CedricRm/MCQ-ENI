import { FC } from 'react'

const DoneTest: FC = () => {
    return (
        <div className="ite ms-center    flex justify-center">
            <div className="relative flex w-80 flex-col items-center rounded-xl bg-black bg-opacity-50 p-8 text-xl">
                <p className="text-center font-Monolisa text-[1rem] font-semibold">
                    Vous avez déjà participer à ce test
                </p>
                <img
                    src="/assets/img/img_3d_working_girl.png"
                    alt="working girl"
                    className="my-4 w-48"
                />
            </div>
        </div>
    )
}

export default DoneTest
