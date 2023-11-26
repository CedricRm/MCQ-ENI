import './App.css'
import { UserContextProvider } from './context/User'
import Router from './routes'

function App() {
    return (
        <UserContextProvider>
            <Router />
        </UserContextProvider>
    )
}

export default App
