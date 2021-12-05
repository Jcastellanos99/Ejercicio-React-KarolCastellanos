import { Fragment } from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import { CarritoContextProvider } from './Context/carritoContext';


export default function App() {
  

  return (
    <CarritoContextProvider>
    <Fragment>
      <Navbar/>
      <Articulos/>
    </Fragment>
    </CarritoContextProvider>
  );
}


