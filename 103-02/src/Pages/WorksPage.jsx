import React from 'react'
import { Routes, Route } from 'react-router-dom'

const WorksPage = () => {

    const WorksPageOne = () => <div>This is a nested route works page 1</div>
    const WorksPageTwo = () => <div>This is a nested route works page 2</div>
    const WorksPageThree = () => <div>This is a nested route works page 3</div>

    return (
        <>
            <h2>Works Page</h2>   
            <Routes>
                <Route path="page1" element={<WorksPageOne />} />
                <Route path="page2" element={<WorksPageTwo />} />
                <Route path="page3" element={<WorksPageThree />} />
            </Routes>
        </>
    )
}

export default WorksPage
