import { BuscarFilmes } from "./components/BuscarFilmes";
import { Favoritos } from "./components/Favoritos";
import { Galeria } from "./components/Galeria";
import { Header } from "./components/header";
import { PaginaInicial } from "./components/PaginaInicial";
import {CartProvider} from "./context/cart";


function App() {

 

  return (
    <div className="App">
     <CartProvider>
      <Header/>
      <PaginaInicial/>
      <BuscarFilmes/>
      <Favoritos/>
      <Galeria/>
     </CartProvider>
    </div>
  );
}

export default App;
