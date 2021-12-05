import { useRef, useState } from "react";
import { Botton, Div, Input } from "./estilo";


export const Pedido = () =>{

    const pedidos = useRef();
    const [pedido, setPedidos] = useState("");

    const handlerPedido =()=>{
            if(pedidos.current.value){
                setPedidos(pedidos.current.value)
            }else{
                setPedidos("")
            }
    }
    return(
        <Div>
            <span>
            <Input ref={pedidos} type="text"></Input>
            <Botton onClick={handlerPedido}>Lo quiero</Botton></span>
            <h2>Lista de Pedidos</h2>
            <h3>{pedido}</h3>
        </Div>

    )
}