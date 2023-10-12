"use client";
import React, { useState, useEffect } from "react";
import AddToCartButton from "@/components/Product/AddToCartButton";
import ProductPrice from "@/components/Product/ProductPrice";
import { IProduct } from "@/types/product";
import Shelf from "@/components/Shelf";
import ProductRatings from "@/components/Product/ProductRatings/index";
import axios from "axios";
import "@/styles/product.scss";
import ContentLoader from "react-content-loader";
import ProductLoader from "@/components/Product/ProductLoader";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [productData, setProductData] = useState<IProduct>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const url = `https://fakestoreapi.com/products/${params.slug[0]}`;

  useEffect(() => {
    axios
      .get(url)
      .then(function (res) {
        setLoading(false);
        console.log(res.data);
        res.data.length === 0 ? setError(true) : setProductData(res.data);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <main className="product container">
      {error && (
        <div className="product__error">
          <h2> Ops... Produto não encontrado :( </h2>
        </div>
      )}

      {productData && (
        <section>
          <div className="product__container">
            <div className="product__content-left">
              <figure className="product__image">
                <img src={productData?.image} alt="product-image" />
              </figure>
            </div>

            <div className="product__content-right">
              <div>
                <h1 className="product__title">{productData?.title}</h1>
                <ProductRatings ratingValue={productData?.rating} />
              </div>
              <ProductPrice price={productData?.price} />
              <AddToCartButton productData={productData} />

              <article className="product__description">
                <h4 className="product__description--title">Descrição</h4>
                <p className="product__description--text">
                  {productData?.description}
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      {loading && <ProductLoader />}
      <Shelf category="men's clothing" title="PRODUTOS RECOMENDADOS" />
    </main>
  );
}
