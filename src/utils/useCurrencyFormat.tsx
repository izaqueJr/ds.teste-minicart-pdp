const useCurrencyFormat = (price?: number | string) => {
  if (!price) return null;
  const formatPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return formatPrice;
};

export default useCurrencyFormat;
