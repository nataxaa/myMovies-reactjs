import { useState } from "react";
import { api } from "../../service/api";
import { Container } from "./style";




export function BuscarFilmes(){

    const [input, setInput] = useState('')
    const [movies, setMovies] = useState<any>()

    async function handleSearch() {
        if(input != ''){
            try{
                const response = await api.get(`${input}&apikey=d433d0f6`)
                if(response.data.Response == 'false'){
                    alert("Filme não encontrado.")
                    setInput('')
                }else{
                    setMovies(response.data)
                }
                    
            }catch{
                alert("erro!!!")
            }
        }else{
            alert('Digite o nome do Filme')
        }
    }
  

 

    return(
        <Container>
            <div className="page-search">
           
            <div className="search">
            <h1>Buscar <span className="title">Filmes</span></h1>
            <input
            type="text"
            placeholder="Digite o nome do filme..."
            value={input}
            onChange={e=>setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
            </div>

            <div className="movie">
                
                    
                <img src={movies?.Poster} alt="poster do filme pesquisado" />
            <span>{movies?.Title}</span>
            <span className="descri">{movies?.Plot}</span>
             <ul>
                <li>{movies?.Ratings[0]?.Source} {movies?.Ratings[0]?.Value}</li>
                <li>{movies?.Ratings[1]?.Source} {movies?.Ratings[1]?.Value}</li>
                <li>{movies?.Ratings[2]?.Source} {movies?.Ratings[2]?.Value}</li>
             </ul>   
            </div>        
                
            
            </div>
        </Container>
    )
}