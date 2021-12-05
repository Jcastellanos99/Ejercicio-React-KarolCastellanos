import styled, { css } from 'styled-components'

export const Container = styled.article`
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 8px 5px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 30px;
    text-align: center;
    width: 450px;
    margin-top: 30px;
`

export const Image = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 250px;
    ${props => css`
        background-image: url(${props.imagen})
    `}
`

export const ProductName = styled.h4`
    font-size: 22pt;
    margin-bottom: 0
`

export const Price = styled.p`
    color: #4c4c4c;
    font-size: 18pt;
    margin-top: 4px;
`

