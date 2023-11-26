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
                    path: 'student',
                    children: [
                        {
                            index: true,
                            element: <Student />,
                        },
                        {
                            path: 'test',
                            element: <Test />,
                        },
                    ],
                },
                {
                    path: 'teacher',
                    children: [
                        { index: true, element: <Teacher /> },
                        {
                            path: 'tests',
                            element: <TeacherTests />,
                        },
                    ],
                },
                {
                    path: 'admin',
                    children: [
                        {
                            index: true,
                            element: <Admin />,
                        },
                        {
                            path: 'professors',
                            element: <Professors />,
                        },
                        {
                            path: 'students',
                            element: <Students />,
                        },
                    ],
                },
            ],
        },
    ])
}

// Pages
const Home = Loadable(lazy(() => import('../pages/home')))
// Student
const Student = Loadable(lazy(() => import('../pages/student')))
const Test = Loadable(lazy(() => import('../pages/test')))
// Admin
const Admin = Loadable(lazy(() => import('../pages/admin')))
const Professors = Loadable(
    lazy(() => import('../pages/admin/teachers/Professors'))
)
const Students = Loadable(
    lazy(() => import('../pages/admin/students/Students'))
)
// Teacher
const Teacher = Loadable(lazy(() => import('../pages/teacher')))
const TeacherTests = Loadable(lazy(() => import('../pages/teacher/tests')))
