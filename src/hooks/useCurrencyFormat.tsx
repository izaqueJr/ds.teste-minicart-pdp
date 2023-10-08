import { useState, useEffect } from "react";

const useCurrencyFormat = (price?: number | null): string | null => {
  const [formattedPrice, setFormattedPrice] = useState<string | null>(null);

  useEffect(() => {
    if (price !== undefined && price !== null) {
      const formatPrice = price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      setFormattedPrice(formatPrice);
    } else {
      setFormattedPrice(null);
    }
  }, [price]);

  return formattedPrice;
};

export default useCurrencyFormat;
