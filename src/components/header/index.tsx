import { Container } from "./style";


export function Header(){
    return(
        <Container>
            <h1>myMovies</h1>
            <ul>
                <li>Pagina Inicial</li>
                <li>Buscar Filmes</li>
                <li>Favoritos</li>
                <li>Galeria</li>
            </ul>
        </Container>
    )
}