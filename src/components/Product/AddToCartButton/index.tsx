"use client";
import { useCart } from "@/context/cart";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartButton = () => {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      id: 1,
      title: "teste",
      price: 10,
      image: "teste",
      description: "teste",
      quantity: 1,
    });

    toast("Produto adicionado carrinho!");
  }
  return (
    <>
      <button className="product__button" onClick={handleAddToCart}>
        <img src="/images/icon-cart.svg" alt="" />
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
