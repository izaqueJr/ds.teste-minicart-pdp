async function getProductById(productId: string) {
  const productData = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return productData;
}

export { getProductById };
