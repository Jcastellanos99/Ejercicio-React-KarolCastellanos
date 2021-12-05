import { Carro } from '../Carro';
import styles from './estilos';
import {NAVBAR} from './estilo';

export const Navbar = () => {
    return (
        <NAVBAR>
            <p>Logo</p>
            <Carro/>
        </NAVBAR>
    )
}