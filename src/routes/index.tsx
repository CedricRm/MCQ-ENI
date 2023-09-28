import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Loadable: <T extends JSX.IntrinsicAttributes>(
    Component: React.ComponentType<T>
) => React.ComponentType<T> = (Component) => (props) => {
    return (
        <Suspense>
            <Component {...props} />
        </Suspense>
    )
}

export default function Router() {
    return useRoutes([
        // Main routes
        {
            children: [
                {
                    element: <Home />,
                    index: true,
                },
            ],
        },
    ])
}

const Home = Loadable(lazy(() => import('../pages/home/Home')))
