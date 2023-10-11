"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { use, useEffect } from "react";
import { getProductsByCategory } from "@/hooks/getProducts";
import { IProduct } from "@/types/product";
import "swiper/css";
import "@/styles/shelf.scss";
import useCurrencyFormat from "@/utils/useCurrencyFormat";

interface IShelfProps {
  category: string;
  title: string;
}

interface ICategoryProducts extends IProduct {
  error?: string;
}

const Shelf = ({ category, title }: IShelfProps) => {
  const products: ICategoryProducts = use(getProductsByCategory(category));

  if (products?.error) {
    return (
      <div className="shelf__error">
        Ops... Estamos com problemas para carregar os produtos, tente novamente
        mais tarde.
      </div>
    );
  }

  return (
    <section className="shelf">
      <h2 className="shelf__title">{title}</h2>
      <Swiper
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          480: {},
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {/* {products?.map((product: IProduct) => {
          return (
            <SwiperSlide key={product.id}>
              <a href={`/product/${product.id}`} className="shelf__product col">
                <figure className="shelf__product-image">
                  <img src={product.image} alt="product image" />
                </figure>
                <h3 className="shelf__product-name">{product.title}</h3>
                <p className="shelf__product-price">
                  {useCurrencyFormat(product.price)}
                </p>
              </a>
            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </section>
  );
};

export default Shelf;
