import { FC } from 'react'

const CircleForms: FC = () => {
    return (
        <div className="absolute -bottom-[35rem] left-0 right-0 z-10 flex justify-center">
            <div className="flex h-[70rem] w-[70rem] items-center justify-center rounded-full border-2 border-white border-opacity-5">
                <div className="flex h-[50rem] w-[50rem] items-center justify-center rounded-full border-2 border-white border-opacity-5">
                    <div className="flex h-[30rem] w-[30rem] items-center justify-center rounded-full border-2 border-white border-opacity-5"></div>
                </div>
            </div>
        </div>
    )
}

export default CircleForms
