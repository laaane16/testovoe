"use client";

import { FC } from "react";
import Image from "next/image";

import classes from "./page.module.scss";

import { removeItem } from "@/redux/slices/favouriteSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Metadata } from "next";

const FavouritePage: FC = () => {
  const dispatch = useAppDispatch();
  const favouriteItems = useAppSelector((state) => state.favourite.items);

  return (
    <section className={classes.section}>
      <hr color='#E2E8F0' className={classes.line}/>
      <div className="_container">
        <h1 className={classes.title}>Favourite</h1>
        <div className={classes.content}>
          {favouriteItems.length === 0 ? (
            <h1>Nothing found in favorites</h1>
          ) : (

            <>
              <p className={classes.count}>{favouriteItems.length} item</p>
              <ul className={classes.list}>
                {favouriteItems.map((item) => (
                  <li className={classes.item} key={item.id}>
                    <Image alt="#" src={item.image} height={178} width={134} />
                    <div className={classes.itemContent}>
                      <div className={classes.itemInfo}>
                        <p className={classes.category}>{item.category}</p>
                        <p className={classes.itemTitle}>{item.title}</p>
                      </div>
                      <p className={classes.price}>{item.price} $</p>
                      <button className={classes.btn} onClick={() => {dispatch(removeItem(item))}}>Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FavouritePage;
