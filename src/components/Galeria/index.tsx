import { Swiper, SwiperSlide } from "swiper/react"
import { movies } from "../../Data/data";
import { Container } from "./style";
import { Pagination } from "swiper";


import "swiper/css";
import "swiper/css/pagination";

interface imagesProps{
    id:number
    image:any
}

export function Galeria(){
    
    const move = movies;
    
    console.log(move)
    return(
        <Container>
            <h1>Galeria</h1>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                {move.map((moves:imagesProps)=>(
                <SwiperSlide>
                    <img src={moves.image} alt="imagem de um filme" />
                    </SwiperSlide>
                    ))}

            </Swiper>
        </Container>
    )
}