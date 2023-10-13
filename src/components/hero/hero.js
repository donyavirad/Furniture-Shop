import React from "react";
import "./hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-slider-nav">
                    <div className="next-slide">Custom Next Btn</div>
                    <div className="prev-slide">Custom prev Btn</div>
                </div>
                <div className="swiper-pagination">
                </div>
                <Swiper
                    spaceBetween={30}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".next-slide",
                        prevEl: ".prev-slide",
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + "*" + "</span>";
                        },
                    }}
                >
                    <SwiperSlide className="slide">
                        <img className="slide-img" src="./img/slide-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img className="slide-img" src="./img/slide-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img className="slide-img" src="./img/slide-3.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;
