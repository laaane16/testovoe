import { Product } from "@/components";

import classes from './ProductList.module.scss';
import { FC } from "react";
import { IProduct } from "@/@types/types";
import ProductSkeleton from "@/components/UI/skeleton/ProductSkeleton";

interface ProductListProps{
  products: IProduct[];
}

const ProductList:FC<ProductListProps> = ({products}) => {
  return (
    <ul className={classes.list}>
      {products.length > 0 ? products.map((item) => (
        <li key={item.id}>
          <Product {...item} />
        </li>
      )): [1,2,3,4,5,6].map((item) => (
        <li key={item}>
            <ProductSkeleton/>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
