"use client";
import useCurrencyFormat from "@/utils/useCurrencyFormat";
import React from "react";

interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => {
  const formatedPrice = useCurrencyFormat(price);
  return <p className="product__price">{formatedPrice}</p>;
};

export default ProductPrice;
