import { FC } from 'react'

const SubjetsList: FC = () => {
    const subjects = [
        {
            name: 'Java',
            url: './assets/icons/ic_java.png',
            color: '#e42f5a',
        },
        {
            name: 'Android',
            url: './assets/icons/ic_android.png',
            color: '#27c064',
        },
        {
            name: 'Algorithmes',
            url: './assets/icons/ic_algorithm.png',
            color: '#f2994a',
        },
        {
            name: 'Analyse des données',
            url: './assets/icons/ic_data.png',
            color: '#FFD600',
        },
    ]
    return (
        <div className="mt-4 flex flex-col gap-4">
            {subjects.map((subject) => (
                <div
                    className="flex items-center justify-between gap-6 bg-secondaryDark-background p-2.5"
                    key={subject.name}
                >
                    <div className="flex items-center gap-4">
                        <div
                            className="rounded-xl border-2 border-opacity-80 bg-primaryDark-background p-2.5"
                            style={{ borderColor: subject.color }}
                        >
                            <img
                                src={subject.url}
                                alt="Java"
                                className="h-6 w-6"
                            />
                        </div>
                        <div>
                            <p>{subject.name}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <p className="text-xs text-grey-50">
                                Mise à jour le 17/10/2023
                            </p>
                        </div>
                        <div className="flex cursor-pointer gap-1">
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                            <div className="h-1 w-1 rounded-full bg-white "></div>
                            <div className="h-1 w-1 rounded-full bg-white "></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubjetsList
