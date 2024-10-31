"use client";

import { FC } from "react";
import Image from "next/image";

import { HeartIcon } from "../..";

import classes from "./Product.module.scss";
import { IProduct } from "@/@types/types";
import Link from "next/link";
import { addItem, removeItem } from "@/redux/slices/favouriteSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const Product: FC<IProduct> = ({ id, title, price, category, image, description, rating }) => {
  const dispatch = useAppDispatch();
  const favouriteItems = useAppSelector((state) => state.favourite.items);

  const toggleFavourite = (item: IProduct) => {
    if (!favouriteItems.find((i) => i.id === item.id)) {
      dispatch(addItem(item));
    } else {
      dispatch(removeItem(item));
    }
  };

  return (
    <div className={classes.card}>
      <div
        className={classes.favBtn}
        onClick={() => {
          toggleFavourite({ id, image, title, price, category, description, rating });
        }}
      >
        <HeartIcon
          className={
            favouriteItems.find((i) => i.id === id)
              ? `${classes.iconRed} ${classes.icon}`
              : classes.icon
          }
        />
      </div>
      <div className={classes.info}>
        <p className={classes.type}>{category}</p>
        <p className={classes.title}>{title}</p>
      </div>
      <Image
        className={classes.image}
        width={200}
        height={223}
        src={image}
        alt="#"
      />
      <p className={classes.price}>{price} $</p>
      <Link className={classes.more} href={`/catalog/${id}`}>
        More
      </Link>
    </div>
  );
};

export default Product;
