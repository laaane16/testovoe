import { FC } from 'react';
import classes from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
        <div className="_container">
            <p className={classes.text}>© ООО “Gushop” 2002—2019. All rights reserved</p>
        </div>
    </footer>
  )
};

export default Footer;
