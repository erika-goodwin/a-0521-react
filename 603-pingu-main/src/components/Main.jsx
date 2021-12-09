import React from 'react'
import styled from 'styled-components'

import SideBar from './SideBar'

const Main = ({ user }) => {
    return (
        <MainContainer>
            <SideBar user={user} />
            {/* chat */}
        </MainContainer>
    )
}

export default Main

const MainContainer = styled.div`
    display: flex;
`