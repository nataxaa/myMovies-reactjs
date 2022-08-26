import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart";
import { Container } from "./style";

interface movieProps{
    title:string
    imagem: any
}


export function Favoritos(){
    const {filme}:any = useContext(CartContext)
    const flag = false

    
    return(
        <Container id="Favoritos">

            <h1>Filmes Favoritos</h1>
            <div className="movies-favoritos">
            

            

            {filme.map((filmes:any)=>(
                <div className="cart">
                    <img src={filmes.imagem} alt="oii" />
                    <span>{filmes.title}</span>
                </div>
                    ))}



            </div>
        </Container>
    )

}