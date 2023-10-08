import React, { use } from "react";
import "@/styles/product.scss";
import { getProductById } from "@/hooks/getProducts";
import AddToCartButton from "@/components/Product/AddToCartButton";
import ProductPrice from "@/components/Product/ProductPrice";
import { IProduct } from "@/types/product";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const productData: IProduct = use(getProductById(params.slug[0]));

  return (
    <main className="product container">
      <section>
        <div className="product__container">
          <div className="product__content-left">
            <figure className="product__image">
              <img src={productData?.image} alt="" />
            </figure>
          </div>

          <div className="product__content-right">
            <h1 className="product__title">{productData?.title}</h1>
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
      <section></section>
    </main>
  );
}
