export const fetchProductsApi = () => {
    return fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
  };
  