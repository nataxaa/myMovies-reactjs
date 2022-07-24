import styled from "styled-components";


export const Container = styled.div`

width:1349px ;
height:610px ;
background-color:#141414 ;

h1{
  font-size:4rem ;
  color:#F0F2EF ;

  span.title{
    color:#54C6EB ;
    font-size:4rem ;
  }
}

input{
    
    padding:10px ;
    border-radius:10px ;
    border:none ;
    width:15rem ;
    outline:none ;
    box-shadow: 5px 10px 5px ;
  
}
button{
    padding:8px ;
    border:none ;
    border-radius:10px ;
    outline:none ;
    cursor: pointer;
    box-shadow: 5px 10px 5px ;
}

div.page-search{
    display:grid ;
    grid-template-columns:1fr 1fr ;

}

div.search{
    display:flex ;
    flex-direction:column ;
    width:fit-content ;
    height:fit-content ;
    position:relative ;
    top:15rem ;
    left:8rem ;
    align-items:center ;
    gap:1rem;
}
div.movie{
    box-shadow: 5px 10px 5px ;
    background-color:#54C6EB ;
    display:flex ;
    flex-direction:column ;
    position:relative ;
    top:4rem;
    left:4rem ;
    width:fit-content ;
    height:23rem ;
    img{
        width:12rem ;
        border-radius:10px ;
        margin-bottom:1rem ;
        box-shadow: 5px 10px 5px ;
    }
    padding-bottom:8rem ;
    padding-right:10rem ;
    padding-left:3rem ;
    
    border-radius:10px ;
}
span{
    font-size:3rem ;
    color:#141414 ;
}
span.descri{
    font-size:1rem ;
    width:20rem ;
}
ul{
    list-style:none ;
    position:relative ;
    top:-18rem ;
    left:12rem ;
    color:#141414 ;
    width:fit-content ;
}
button.heart{
    width:fit-content ;
    position:relative ;
    left:27rem ;
    top:0.5rem ;
    font-size:1.2rem ;
    padding:-1rem ;
}

`