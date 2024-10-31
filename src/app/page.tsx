import { Path } from "@/components";

import classes from './page.module.scss'

import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <section className={classes.section}>
      <div className="_container">
        <Path />
        <Link className={classes.link} href="/catalog">GO TO CATALOG</Link>
      </div>
    </section>
  );
};

export default Home;
