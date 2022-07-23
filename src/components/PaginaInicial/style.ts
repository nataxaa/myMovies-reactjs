import styled from "styled-components";
import imagem from '../../images/inicial3.png'

export const Container = styled.div`

color:white ;
background-image:url(${imagem}) ;
background-repeat:no-repeat ;
background-size:45rem ;
background-position:90% 45% ;
background-color:black ;
padding-top:3rem ;
width:1349px ;
height:610px ;

h1{
    width:fit-content ;
   margin-top:3rem ;
   position:relative ;
   top: 10rem ;
   right: -17rem ;
   display:flex ;
   flex-direction:column ;
   font-size:5rem ;
   span{
    margin-left:-5rem ;
    color:#252323 ;
   }
}


`