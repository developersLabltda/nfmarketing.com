import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import 'swiper/css/effect-fade';

import slider1 from "./sliders/slide1.jpeg";
import slider2 from "./sliders/slide2.jpeg";
import slider3 from "./sliders/slide3.jpeg";
import slider4 from "./sliders/slide4.jpeg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  // Importa as imagens da pasta public/Sliders/
  const slideImages = [slider1, slider2, slider3, slider4];

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 underline ">Nossos trabalhos </h1>
      <div className="flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={50}
          effect="fade"
          autoplay
          grabCursor={true}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          className="w-full max-w-xl"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={crypto.randomUUID()}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="mx-auto w-full h-96 object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
