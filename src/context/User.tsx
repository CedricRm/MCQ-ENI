/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, ReactNode, createContext, useReducer } from 'react'
import { user } from '../utils/interfaces'

interface StateInterface {
    userInfo: user
}

interface UserContextType {
    userDispatch: Dispatch<any>
    userState: StateInterface
}

interface UserContextProviderProps {
    children: ReactNode
}

const initialUserState: StateInterface = {
    userInfo: {},
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const actions: Record<
    string,
    (state: StateInterface, payload: any) => StateInterface
> = {
    setUserInfo: (state: StateInterface, payload: any) => {
        return {
            ...state,
            userInfo: payload,
        }
    },
}

const reducer = (
    state: StateInterface,
    { payload, type }: { payload: any; type: string }
): StateInterface => {
    if (actions[type]) {
        return actions[type](state, payload)
    }
    return state
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialUserState)

    return (
        <UserContext.Provider
            value={{ userDispatch: dispatch, userState: state }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
