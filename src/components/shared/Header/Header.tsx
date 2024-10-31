import { Favourite, Logo, Nav, Search } from "@/components";

import { FC } from "react";

import classes from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header>
      <div className={`_container `}>
        <div className={classes.container}>
          <Logo className={classes.logo}/>
          <Search className={classes.headerSearch} />
          <Favourite className={classes.favourite}/>
        </div>
      </div>
      <Nav/>
    </header>
  );
};

export default Header;
