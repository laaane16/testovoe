import Link from "next/link";
import { FC } from "react";

import { HeartIcon } from "@/components";

import classes from "./Favourite.module.scss";

interface Favourite {
  className?: string;
}

const Favourite: FC<Favourite> = ({ className }) => {
  return (
    <Link className={className} href="/favourite">
      <div className={classes.container}>
        <HeartIcon />
        <p>Favourite</p>
      </div>
    </Link>
  );
};

export default Favourite;
