"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";

import classes from "./Search.module.scss";

import { SearchIcon } from "@/components";
import ProductsService from "@/API/ProductsService";
import { IProduct } from "@/@types/types";

interface SearchProps {
  className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchData = async () => {
    const products = await ProductsService.getAll();
    setProducts(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [value, setValue] = useState("");

  const getSearchedProducts = () => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  };

  const searchedProducts = getSearchedProducts();

  return (
    <div className={`${classes.container}`}>
      <div className={`${className}`}>
        <input
          className={
            value.length > 0
              ? `${classes.search} ${classes.searchActive}`
              : `${classes.search}`
          }
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Search"
          type="text"
        />
        <SearchIcon className={classes.icon} />
      </div>
      {value.length > 0 && (
        <ul className={classes.modal}>
          {searchedProducts.length > 0 ? (
            searchedProducts.map((product) => (
              <li key={product.id} className={classes.item}>
                <Link
                  className={classes.link}
                  onClick={() => {
                    setValue("");
                  }}
                  href={`/catalog/${product.id}`}
                >
                  {product.title}
                </Link>
              </li>
            ))
          ) : (
            <li className={classes.item}>
              Nothing found matching your request
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
