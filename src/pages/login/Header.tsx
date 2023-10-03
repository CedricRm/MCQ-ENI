import { FC } from 'react'

const Header: FC = () => {
    const handleRedirect = () => {
        window.history.back()
    }
    return (
        <div
            className="absolute left-0 top-2.5 cursor-pointer"
            onClick={handleRedirect}
        >
            <img
                src="./assets/icons/ic_left_arrow.png"
                alt="Developer"
                className="z-40 w-10"
            />
        </div>
    )
}

export default Header
