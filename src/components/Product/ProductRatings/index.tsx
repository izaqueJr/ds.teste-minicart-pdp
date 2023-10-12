"use client";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

interface IProductRatingsProps {
  ratingValue: {
    rate: number;
    count: number;
  };
}

const ProductRatings = ({ ratingValue }: IProductRatingsProps) => {
  const [rating, setRating] = useState(ratingValue.rate);
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  if (!ratingValue) return <></>;

  return (
    <div className="product__rating row">
      <span className="product__rating-text"> {ratingValue?.rate} de 5</span>

      <Rating
        allowFraction={true}
        initialValue={rating}
        onClick={handleRating}
        size={18}
      />
      <span className="product__rating-text">({ratingValue.count})</span>
    </div>
  );
};

export default ProductRatings;
