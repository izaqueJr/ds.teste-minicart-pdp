import React, { use } from "react";

import "@/styles/product.scss";
import { getProductById } from "@/hooks/getProducts";
import AddToCartButton from "@/components/Product/AddToCartButton";
import ProductPrice from "@/components/Product/ProductPrice";
import { IProduct } from "@/types/product";
import Shelf from "@/components/Shelf";
import ProductRatings from "@/components/Product/ProductRatings/index";

interface IProductData extends IProduct {
  error?: string;
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const productData: IProductData = use(getProductById(params.slug[0]));

  return (
    <main className="product container">
      {productData?.error ? (
        <div className="product__error">
          <h2> Ops... Produto não encontrado :( </h2>
        </div>
      ) : (
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

      <Shelf category="men's clothing" title="PRODUTOS RECOMENDADOS" />
    </main>
  );
}
