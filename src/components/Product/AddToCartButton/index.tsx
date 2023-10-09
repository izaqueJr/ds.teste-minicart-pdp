"use client";
import React from "react";
import { useCart } from "@/context/cart";
import { IProduct } from "@/types/product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IAddToCartButtonProps {
  productData: IProduct;
}

const AddToCartButton = ({ productData }: IAddToCartButtonProps) => {
  const cartContext = useCart();
  if (!cartContext) return null;
  const { addToCart } = cartContext;

  function handleAddToCart() {
    if (!productData) {
      return;
    }

    const product = {
      ...productData,
      quantity: 1,
    };

    addToCart(product);

    toast("Produto adicionado carrinho!");
  }
  return (
    <>
      <button className="product__button" onClick={handleAddToCart}>
        <img src="/images/icon-cart.svg" alt="minicart" />
        <span>Adicionar ao carrinho</span>
      </button>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default AddToCartButton;
