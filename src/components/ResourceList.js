import React from 'react'
import useResources from './useResources'

// class ResourceList extends React.Component {
//     state = {
//         resources: []
//     }

//     async componentDidMount() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`)
//         this.setState({ resources: response.data })
//     }

//     async componentDidUpdate(prevProps) {
//         if (prevProps.resourceName !== this.props.resourceName) {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`)
//             this.setState({ resources: response.data })
//         }
//     }

//     render() {
//         return (
//             <ul>
//                 {
//                     this.state.resources.map(resource =>
//                         <li key={resource.id}>{resource.title}</li>
//                     )
//                 }
//             </ul>
//         )
//     }
// }


const ResourceList = ({ resourceName }) => {
    // 1. useEffect
    // const [resources, setResources] = useState([])

    // const fetchResponse = async(resourceName)=>{
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`)
    //     setResources(response.data)
    // }
    // useEffect(()=>{
    //     fetchResponse(resourceName)
    // },[resourceName])

    //2. use custom react hooks
    // named useResources
    const resources = useResources(resourceName)
    return (
        <ul>
            {
                resources.map(resource => <li key={resource.id}>{resource.title}</li>)
            }
        </ul>
    )

}

export default ResourceList