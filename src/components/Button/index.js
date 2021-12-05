import styles from './estilos'
import { Botton } from './estilo'
import { CarritoContext } from '../../Context/carritoContext'
import { useContext } from 'react'

export const Button = ({children, prod}) => {
    const carroContext = useContext(CarritoContext);
    const {agregarAlCarro} = carroContext;
    return (
        <Botton onClick={() => agregarAlCarro(prod)} >{children}</Botton>
    )
}
