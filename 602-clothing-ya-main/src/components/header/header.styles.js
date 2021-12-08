import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 150px;
    padding: 25px 0;
    font-family: Playfair;
    font-weight: 900;
    font-style: none;

    img {
    height: 3rem;
    }
`

export const OptionContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
            
    &:hover{
        cursor: pointer;
    }
`