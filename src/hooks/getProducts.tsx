async function getProductById(params: any) {
  const productId = params.slug[0];

  const productData = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return productData;
}

export { getProductById };
