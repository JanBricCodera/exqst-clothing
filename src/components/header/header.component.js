import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/exqst.svg';

const header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo classname="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            <Link className="option" to="/signin">SIGNIN</Link>
        </div>
    </div>
);


export default header;