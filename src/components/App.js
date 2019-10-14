import React, { useState } from 'react'
import ResourceList from './ResourceList'


const App = () => {
    const [resourceName, setResourceName] = useState('posts')
    return (
        <React.Fragment>
            <button style={{ cursor: 'pointer', marginRight: 10 }} onClick={() => { setResourceName('posts') }}>Posts</button>
            <button style={{ cursor: 'pointer' }} onClick={() => { setResourceName('todos') }}>Todos</button>
            <ResourceList resourceName={resourceName} />
        </React.Fragment>
    )
}

export default App;