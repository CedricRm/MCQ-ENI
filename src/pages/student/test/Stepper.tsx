import { FC } from 'react'

interface StepperInterface {
    step: number
    steps: number
}

const Stepper: FC<StepperInterface> = ({ steps, step }) => {
    return (
        <div className="flex justify-center gap-2">
            {Array.from({ length: steps }).map((_, index) => (
                <div
                    className={`h-2 w-20 rounded-xl ${
                        index - 1 === step
                            ? 'bg-purple'
                            : 'border-2 border-white border-opacity-50'
                    }`}
                    key={index}
                ></div>
            ))}
        </div>
    )
}

export default Stepper
