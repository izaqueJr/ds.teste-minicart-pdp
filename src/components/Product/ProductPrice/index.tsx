"use client";
import React from "react";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";
interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => {
  const formatedPrice = useCurrencyFormat(price);
  return <p className="product__price">{formatedPrice}</p>;
};

export default ProductPrice;
