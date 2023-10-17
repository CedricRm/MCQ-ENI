import { FC } from 'react'

const LeftCircleForms: FC = () => {
    return (
        <div className="absolute -left-[6rem] top-[20rem] z-10 flex justify-center">
            <div className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full border-2 border-white border-opacity-5">
                <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-white border-opacity-5">
                    <div className="flex h-[0.1rem] w-[0.1rem] items-center justify-center rounded-full border-2 border-white border-opacity-5"></div>
                </div>
            </div>
        </div>
    )
}

export default LeftCircleForms
