"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import classes from "./page.module.scss";

import { HeartIcon, Path, StarIcon } from "@/components";
import ProductsService from "@/API/ProductsService";
import { addItem, removeItem } from "@/redux/slices/favouriteSlice";
import ProductPageSkeleton from "@/components/UI/skeleton/ProductPageSkeleton";
import { IProduct } from "@/@types/types";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useParams } from "next/navigation";



const ProductPage: FC = () => {
  const {id}: {id:string} = useParams()

  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const dispatch = useAppDispatch();
  const favouriteItems = useAppSelector((state) => state.favourite.items);

  const toggleFavourite = (item: IProduct) => {
    if (!favouriteItems.find((i: IProduct) => i.id === item.id)) {
      dispatch(addItem(item));
    } else {
      dispatch(removeItem(item));
    }
  };

  const fetchData = async () => {
    const product = await ProductsService.getProductById(id);
    setProduct(product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={classes.section}>
      <div className="_container">
        <Path endpoint={product.title} />
          <div className={classes.content}>
            {product.id?<>
            
            <Image className={classes.image} alt="#" src={product.image} height={200} width={256} />
            <div className={classes.info}>
              <div className={classes.preview}>
                <button onClick={() => {toggleFavourite(product)}} className={classes.likeBtn}>
                {favouriteItems.find((i: IProduct) => i.id === Number(id))?'Remove from favourite':'Add to favourite'} <HeartIcon className={favouriteItems.find((i:IProduct) => i.id === Number(id))?classes.redIcon: ''}/>
                </button>
                <p className={classes.title}>{product.title}</p>
                <div className={classes.rating}>
                  <ul className={classes.list}>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <li key={item}>
                        <StarIcon
                          className={
                            index + 1 < product.rating?.rate ? "yellow" : ""
                          }
                        />
                      </li>
                    ))}
                  </ul>
                  ({product.rating?.count} rated)
                </div>
              </div>
              <div className={classes.descriptionBox}>
                <div>
                  <p className={classes.price}>{product.price} $</p>
                  <button className={classes.buyBtn}>Buy</button>
                </div>
                <div className={classes.descriptionContainer}>
                  <p className={classes.subtitle}>Description</p>
                  <p className={classes.text}>{product.description}</p>
                </div>
              </div>
            </div>
            </>: <ProductPageSkeleton/>}
          </div>
      </div>
    </section>
  );
};

export default ProductPage;
