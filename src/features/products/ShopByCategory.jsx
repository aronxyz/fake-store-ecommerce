import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
const ShopByCategory = () => {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            className="mySwiper"
        >
            <SwiperSlide key={1}>
                <div className="electronics thumb">
                    <Link to="/products/electronics" className="btn btn-secondary">
                        Electronics
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="jewelery thumb">
                    <Link to="/products/jewelery" className="btn btn-secondary">
                        Jewelery
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="men-clothing thumb">
                    <Link to="/products/men's-clothing" className="btn btn-secondary">
                        Men's clothing
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="women-clothing thumb">
                    <Link to="/products/women's-clothing" className="btn btn-secondary">
                        Women's clothing
                    </Link>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default ShopByCategory