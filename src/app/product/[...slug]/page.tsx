import React, { use } from "react";
import "@/styles/product.scss";
import { getProductById } from "@/hooks/getProducts";
import AddToCartButton from "@/components/Product/AddToCartButton";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const productData = use(getProductById(params));

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
            <p className="product__price"> R$ {productData?.price}</p>

            <AddToCartButton />

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
