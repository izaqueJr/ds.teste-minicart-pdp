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
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${category}`, {
      cache: "no-store",
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`Erro ao buscar o produto. Status: ${res.status}`);
      }
      return res.json();
    });

    return data;
  } catch (error: any) {
    return { error: error.message };
  }
}

export { getProductById, getProductsByCategory };
