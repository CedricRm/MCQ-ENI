import { FC } from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'

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
