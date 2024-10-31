"use client";

import { FC, useEffect } from "react";

import { CustomSelect, Path, ProductList } from "@/components";
import ProductsService from "@/API/ProductsService";
import { setProducts } from "@/redux/slices/productsSlice";
import {
  setCategory,
  removeCategory,
  setSort,
} from "@/redux/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import classes from "./page.module.scss";
import { IFilter, ISort } from "@/@types/types";
import { Metadata } from "next";

const filterItems = [
  { title: "women's clothing", value: "women's clothing" },
  { title: "men's clothing", value: "men's clothing" },
  { title: "electronics", value: "electronics" },
  { title: "jewelery", value: "jewelery" },
];

const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.filters.sort);
  const categories = useAppSelector((state) => state.filters.categories);

  const fetchData = async () => {
    const products = await ProductsService.getAll();
    dispatch(setProducts(products));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSortChange = (sortValue: ISort) => {
    dispatch(setSort(sortValue));
  };

  const handleCategoriesChange = (categoryValue: IFilter) => {
    if (categories.find((category) => category.value === categoryValue.value)) {
      dispatch(removeCategory(categoryValue));
    } else {
      dispatch(setCategory(categoryValue));
    }
  };

  const products = useAppSelector((state) => state.products.products);

  const getFilteredProducts = () => {
    if (categories.length === 0) {
      return products;
    } else {
      const categoryValues = categories.map((category) => category.value);
      return products.filter((product) =>
        categoryValues.includes(product.category)
      );
    }
  };

  const filteredProducts = getFilteredProducts();

  const getFilteredAndSortedProducts = () => {
    if (sort.value === "") {
      return filteredProducts;
    } else if (sort.value === "ascending") {
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    } else {
      return [...filteredProducts].sort((a, b) => b.price - a.price);
    }
  };

  const filteredAndSortedProducts = getFilteredAndSortedProducts();

  return (
    <div className={classes.container}>
      <div className="_container">
        <div className={classes.content}>
          <aside>
            <p className={`subtitle ${classes.subtitle}`}>Filters</p>
            <ul>
              {filterItems.map((item) => (
                <li className={classes.item} key={item.title}>
                  <input
                    onClick={() => {
                      handleCategoriesChange(item);
                    }}
                    className={classes.input}
                    type="checkbox"
                    name={"filter"}
                    id={item.value}
                  />
                  <label htmlFor={item.value}>{item.title}</label>
                </li>
              ))}
            </ul>
          </aside>
          <div style={{ flexGrow: "1" }} className="">
            <Path />
            <section className={classes.catalog}>
              <h1 className={`title ${classes.title}`}>Catalog</h1>
              <CustomSelect
                sort={sort}
                onChange={handleSortChange}
                className={classes.select}
                options={[
                  { value: "", title: "Price" },
                  { value: "descending", title: "Descending" },
                  { value: "ascending", title: "Ascending" },
                ]}
              />
              <ProductList products={filteredAndSortedProducts} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
