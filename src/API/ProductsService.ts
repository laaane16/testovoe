import { IProduct } from "@/@types/types";

export default class ProductsService {
  static async getAll() {
    try {
      const products: IProduct[] = await fetch(
        "https://fakestoreapi.com/products"
      )
        .then((res) => res.json())
        .then((json) => json);

      return products;
    } catch {
      throw new Error("Произошла ошибка");
    }
  }
  static async getProductById(id: string) {
    try {
      const product: IProduct = await fetch(
        "https://fakestoreapi.com/products/" + id
      )
        .then((res) => res.json())
        .then((json) => json);

      return product;
    } catch {
      throw new Error("Произошла ошибка");
    }
  }
}
