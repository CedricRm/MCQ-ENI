import { FC } from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

const index: FC = () => {
    return (
        <div className="bg-primaryDark-background text-white">
            <div className="relative h-[100vh] overflow-hidden">
                <div className="flex">
                    <Sidebar />
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default index
