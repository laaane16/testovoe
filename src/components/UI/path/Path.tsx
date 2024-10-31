"use client";

import { Arrow } from "@/components";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import classes from './Path.module.scss';

interface PathProps{
  endpoint?: string;
}

const Path: FC<PathProps> = ({ endpoint }) => {
  const path = usePathname();
  return (
    <div className={classes.container}>
      {path === "/" ? (
        <Link  className={classes.item} href={path}>Main</Link>
      ) : (
        path?.split("/").map((item, index, arr) =>
          item === "" ? (
            <Link key={item} href="/">Main</Link>
          ) : index === arr.length - 1 && endpoint ? (
            <div style={{display:'flex', gap:'5px', alignItems:'center'}} key={item}>
              <Arrow />
              <Link className={classes.item}  href={arr.slice(0, index + 1).join("/")}>{endpoint}</Link>
            </div>
          ) : (
            <div style={{display:'flex', gap:'5px', alignItems:'center'}} key={item}>
              <Arrow />
              <Link  className={classes.item} href={arr.slice(0, index + 1).join("/")}>
                {`${item[0].toUpperCase()}${item.slice(1, item.length)}`}{" "}
              </Link>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Path;
