import axios from 'axios'

const axiosInstance = async (
    baseURL?: string,
    method?: string,
    url?: string,
    headers?: object,
    body?: object
) => {
    try {
        const response = await axios({
            baseURL: baseURL,
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                ...headers,
            },
            data: body,
        })
        return response.data // Return the response data
    } catch (error) {
        // If it's an AxiosError, you can access the response property
        if (axios.isAxiosError(error)) {
            // Access the response data
            const responseData = error.response?.data

            // Throw the response data if it exists
            throw responseData || 'Something went wrong'
        } else {
            // If it's not an AxiosError, throw a generic error message
            throw 'Something went wrong'
        }
    }
}

export default axiosInstance
