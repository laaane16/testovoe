import { saira_extra_condensed } from "@/components/UI/fonts/fonts";
import classes from "./Logo.module.scss";
import Link from "next/link";
import { FC } from "react";

interface LogoProps{
  className?: string;
}

const Logo: FC<LogoProps> = ({className}) => {
  return (
    <Link className={className} href='/'>
      <div className={`${saira_extra_condensed.className} ${classes.path}`}>
        <span>Gu</span>
        <span className={classes.pathRight}>shop</span>
        <span className={classes.pathOver}>clothes store</span>
      </div>
    </Link>
  );
};

export default Logo;
