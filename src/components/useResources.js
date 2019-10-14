import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resourceName) => {

    const [resources, setResources] = useState([])

    const fetchResources = async (resourceName) => {
        const responses = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`)
        setResources(responses.data)
    }
    useEffect(() => {
        fetchResources(resourceName)
    }, [resourceName])
    return resources
}
export default useResources;