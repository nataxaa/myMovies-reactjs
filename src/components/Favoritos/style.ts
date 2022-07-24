import styled from "styled-components";


export const Container = styled.div`

width:1349px ;
height:610px ;
background-color:#E1E1DF ;

h1{
    text-align:center ;
    top:3rem ;
    font-size:3.5rem ;
    background-color:#151514 ;
    width:fit-content ;
    position:relative ;
    left:33% ;
    z-index:0 ;
    border-radius:10px ;
    padding:10px 10px ;
    box-shadow: 5px 10px 5px black ;
    color:white ;
}

div.movies-favoritos{
    display:grid ;
    grid-template-columns:repeat(3, 1fr) ;
    gap:1rem;
    position:relative ;
    margin: 5rem auto ;
    align-items:center ;
    width:30rem ;
    img{
        width:8rem ;

    }
}
div.cart{
    align-items:center ;
    text-align:center ;
}


`


