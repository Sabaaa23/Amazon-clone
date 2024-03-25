import axios from "axios";

export async function productsData() {
  const products = await axios.get("http://localhost:3000/product");
  return products;
}
