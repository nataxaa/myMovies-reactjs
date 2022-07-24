import { Container } from "./style";


export function Header(){
    return(
        <Container>
            <h1>myMovies</h1>
            <ul>
                    <li><a href="#PaginaInicial">Pagina inicial</a></li>
                    <li><a href="#BuscarFilme">Buscar Filmes</a></li>
                    <li><a href="#Favoritos">Favoritos</a></li>
                    <li><a href="#Galeria">Galeria</a></li>
            </ul>
        </Container>
    )
}