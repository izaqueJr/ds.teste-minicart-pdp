async function getProductById(productId: string) {
  try {
    const productData = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      {
        cache: "no-store",
      }
    ).then((res) => {
      if (!res.ok) {
        throw new Error(`Erro ao buscar o produto. Status: ${res.status}`);
      }
      return res.json();
    });

    return productData;
  } catch (error: any) {
    return { error: error.message };
  }
}

async function getProductsByCategory(category: string) {
  const productData = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return productData;
}

export { getProductById, getProductsByCategory };
