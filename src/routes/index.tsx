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
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'student',
                    element: <Student />,
                },
            ],
        },
    ])
}

// Pages
const Home = Loadable(lazy(() => import('../pages/home')))
const Login = Loadable(lazy(() => import('../pages/login')))
const Student = Loadable(lazy(() => import('../pages/student')))
