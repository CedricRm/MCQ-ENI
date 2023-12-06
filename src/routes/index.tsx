import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import AuthGard from '../guards/AuthGard'
import { ROLE_ADMIN, ROLE_STUDENT, ROLE_TEACHER } from '../utils/constants'

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
                            element: (
                                <AuthGard redirectTo="/" role={ROLE_STUDENT}>
                                    <Student />
                                </AuthGard>
                            ),
                        },
                        {
                            path: 'test',
                            children: [
                                {
                                    path: ':slug',
                                    element: (
                                        <AuthGard
                                            redirectTo="/"
                                            role={ROLE_STUDENT}
                                        >
                                            <Test />
                                        </AuthGard>
                                    ),
                                },
                            ],
                        },
                    ],
                },
                {
                    path: 'teacher',
                    children: [
                        {
                            index: true,
                            element: (
                                <AuthGard redirectTo="/" role={ROLE_TEACHER}>
                                    <Teacher />
                                </AuthGard>
                            ),
                        },
                        {
                            path: 'tests',
                            children: [
                                {
                                    index: true,
                                    element: (
                                        <AuthGard
                                            redirectTo="/"
                                            role={ROLE_TEACHER}
                                        >
                                            <TeacherTests />
                                        </AuthGard>
                                    ),
                                },
                                {
                                    path: ':slug',
                                    element: (
                                        <AuthGard
                                            redirectTo="/"
                                            role={ROLE_TEACHER}
                                        >
                                            <TestCustomization />
                                        </AuthGard>
                                    ),
                                },
                            ],
                        },
                    ],
                },
                {
                    path: 'admin',
                    children: [
                        {
                            index: true,
                            element: (
                                <AuthGard redirectTo="/" role={ROLE_ADMIN}>
                                    <Admin />
                                </AuthGard>
                            ),
                        },
                        {
                            path: 'professors',
                            element: (
                                <AuthGard redirectTo="/" role={ROLE_ADMIN}>
                                    <Professors />
                                </AuthGard>
                            ),
                        },
                        {
                            path: 'students',
                            element: (
                                <AuthGard redirectTo="/" role={ROLE_ADMIN}>
                                    <Students />
                                </AuthGard>
                            ),
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
const Test = Loadable(lazy(() => import('../pages/student/test')))
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
const TestCustomization = Loadable(
    lazy(() => import('../pages/teacher/tests/customization'))
)
