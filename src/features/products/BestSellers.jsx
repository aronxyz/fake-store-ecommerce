import React from 'react'
import { useGetBestSellersQuery } from './productsApiSlice'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BestSellers = () => {
    const { data: bestSellers, isFetching } = useGetBestSellersQuery()

    return (
        <div className=' best-sellers-wrapper'>
            {isFetching ? (
                ""
            ) : (
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {bestSellers?.map((bestSeller) => (
                        <SwiperSlide key={bestSeller.id}>
                            <ProductCard product={bestSeller} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}

export default BestSellers