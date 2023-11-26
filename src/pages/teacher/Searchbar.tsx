import { FC } from 'react'

const Searchbar: FC = () => {
    return (
        <div className="flex h-10 w-full items-center gap-4 border-b-2 border-white border-opacity-5 p-8">
            <img
                src="/assets/icons/ic_search.png"
                alt="search icon"
                className="h-5 w-5 opacity-40"
            />
            <input
                className="w-full bg-primaryDark-background py-4 font-light opacity-40"
                placeholder="Rechercher ici"
            />
        </div>
    )
}

export default Searchbar
