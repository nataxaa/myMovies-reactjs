import { BuscarFilmes } from "./components/BuscarFilmes";
import { Favoritos } from "./components/Favoritos";
import { Galeria } from "./components/Galeria";
import { Header } from "./components/header";
import { PaginaInicial } from "./components/PaginaInicial";


function App() {

 

  return (
    <div className="App">
      <Header/>
      <PaginaInicial/>
      <BuscarFilmes/>
      <Favoritos/>
      <Galeria/>
    </div>
  );
}

export default App;
