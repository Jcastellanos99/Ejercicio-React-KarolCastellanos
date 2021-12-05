import { useState, useContext } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import { CarritoContext } from '../../Context/carritoContext'
import {Car, Contenedor, Lista, Ul, Li,Delete} from './estilo';



export const Carro = () => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const carroContext = useContext(CarritoContext);
    const {Cantidad, getData, eliminar} = carroContext;

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let producto = getData()
    let subTotal = producto.articulos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    const EliminarDelCarrito = (id) =>{
        let opcion = window.confirm("Seguro que desea Eliminar este producto?");
        if(opcion == true){
            eliminar(id)
        }
    }


    return (
        <Contenedor>
            {Cantidad > 0 && <Burbuja Cantidad={Cantidad} />}
            <Car onClick={handleMostrarCarro}>
                Carro
            </Car>
            {
                (Cantidad > 0 && mostrarCarro) && 
                    <Lista>
                        <Ul>
                            {
                                producto.carrito.map(x => {
                                    return (
                                        <li style={styles.li}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><Delete onClick={() => EliminarDelCarrito(x.id)}> X </Delete> {x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                                </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                    </Lista>
            }
        </Contenedor>

    )
}