import { useState } from 'react'
import {
    getAllUsers as getAllUsersService,
    filterUsers as filterUsersService,
} from '../../services/user'
import { user } from '../../utils/interfaces'

const useGetUsers = () => {
    const [users, setUsers] = useState<[user]>()
    const authToken = localStorage.getItem('@mcqENI.token')

    const getAllUsers = async () => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            const res = await getAllUsersService(authToken)
            setUsers(res)
        } catch (err) {
            console.error(err)
        }
    }

    const filterUsers = async (filter: object) => {
        if (!authToken || authToken === '') {
            console.error('Missing or invalid authToken')
            return
        }

        try {
            const res = await filterUsersService(authToken, filter)
            setUsers(res)
        } catch (err) {
            console.error(err)
        }
    }

    return { getAllUsers, filterUsers, users }
}

export default useGetUsers
