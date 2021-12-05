import { Articulo } from "../Articulo";
import { Contenedor } from "./estilo";
import { useContext } from "react";
import { CarritoContext} from "../../Context/carritoContext";
import {Pedido} from "../Pedido/index";

export const Articulos = (props) => {
    
    const carroContext = useContext(CarritoContext);
    const {getData} = carroContext;

    const producto = getData();
    return (
        <>
        
            <Pedido></Pedido>
       
        <Contenedor>
            {
                producto.articulos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} />
                )
            }
        </Contenedor>
        </>
    )
}