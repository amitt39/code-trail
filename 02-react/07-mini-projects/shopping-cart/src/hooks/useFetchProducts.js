import { useEffect, useState } from "react";

function useFetchProducts() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/products`)
      const data = await response.json()
      setProducts(data.products)
    })()
  }, [])

  return products;

}

export default useFetchProducts
