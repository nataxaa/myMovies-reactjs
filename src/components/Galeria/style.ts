import styled from "styled-components";


export const Container = styled.div`
width:1349px ;
height:610px ;
background-color:#090A0B ;

h1{
    font-size:3.5rem ;
    position: relative;
    top:3rem ;
    left:10rem ;
    border-bottom: solid 5px white ;
    width:12rem ;
    color:white ;
    
}
.swiper {
  margin-top:6rem ;
  width: 80%;
  height: 50%;
  z-index:0 ;
}
.swiper-slide {
    box-shadow: 5px 10px 5px #0C0A09 ;
  text-align: center;
  font-size: 18px;
  background: #fff;
  position:initial ;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-radius:5px ;
}
.swiper-slide img {
  display: block;
  width: 80%;
  height: 80%;
  object-fit: cover;
  margin-bottom:1rem ;
  border-radius:10px ;

  
}
div.style-swiper{
    display:flex ;
    flex-direction:column ;
    button{
        padding:8px ;
        border:none ;
        background-color:#FFBF69 ;
        border-radius:10px ;
        margin-top:10px ;
        cursor: pointer;
        :hover{
            opacity:0.9 ;
        }
    }
}

`