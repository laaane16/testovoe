import Link from "next/link";

import { m_plus_1p } from "@/components/UI/fonts/fonts";
import classes from "./Nav.module.scss";

interface INavItem {
  title: string;
  link: string;
}

const navItems: INavItem[] = [
  { title: "Main page", link: "/" },
  { title: "Delivery", link: "/delivery" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
];

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className="_container">
        <ul className={`${classes.list} ${m_plus_1p.className}`}>
          {navItems.map((item) => (
            <li key={item.title} className={classes.item}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
