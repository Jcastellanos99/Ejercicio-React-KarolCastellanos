import styled from "styled-components";

export const Contenedor = styled.div`
    position: relative;
`
export const Car = styled.button`
    background-color: #781cc4;
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 13px 20px;
    cursor: pointer;
    margin-top: 3px;
`
export const Lista= styled.div`
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
    background-color: #fff;
    color: #000;
    padding: 10px;
    position: absolute;
    right: 0px;
    top: 50px;
    width: 400px;
`

export const Ul = styled.ul`
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`

export const Li = styled.li`
    align-items: center;
    border-bottom: 1px dashed #cccccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`

export const Delete = styled.span`
    border: none;
    background-color: #fb0207;
    border-radius: 65%;
    color: #fff;
    cursor: pointer;
    font-size: 0.7em;
    padding: 3px 3px;
    text-align : center;
`
