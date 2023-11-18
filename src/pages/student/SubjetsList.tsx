import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const SubjetsList: FC = () => {
    const navigate = useNavigate()

    const subjects = [
        {
            name: "Test sur l'initiation de Java",
            url: '/assets/icons/ic_java.png',
            color: '#e42f5a',
        },
        {
            name: 'Android',
            url: '/assets/icons/ic_android.png',
            color: '#27c064',
        },
        {
            name: 'Algorithmes',
            url: '/assets/icons/ic_algorithm.png',
            color: '#f2994a',
        },
        {
            name: 'Analyse des données',
            url: '/assets/icons/ic_data.png',
            color: '#FFD600',
        },
    ]

    const handleRedirectToTest = () => {
        navigate('test')
    }

    return (
        <div className="mt-4 flex w-full flex-wrap gap-4">
            {subjects.map((subject) => (
                <div
                    className="relative flex w-[46%] cursor-pointer items-center overflow-hidden bg-secondaryDark-background px-2.5 py-8"
                    key={subject.name}
                    onClick={handleRedirectToTest}
                >
                    <div>
                        <p>{subject.name}</p>
                    </div>
                    <div className="absolute -bottom-0 right-0 opacity-10">
                        <img
                            src={subject.url}
                            alt="Java"
                            className="h-10 w-10"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubjetsList
