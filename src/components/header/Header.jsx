import React from 'react'
import styles from './Header.module.scss'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header = () => {
    const navigation = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.headerTop}>
                <div className={styles.iconss}>
                    <FaTwitter />
                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedinIn />
                </div>
                <div className={styles.inputs}>
                   <button>Sponsor</button>
                   <button>Login</button>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <div className={styles.adope}>
                    <h1>ADOPTED</h1>
                </div>
                <div className={styles.navbar}>
                    <ul>
                        <li><a onClick={() => navigation('/')}>Home</a></li>
                        <li><a onClick={() => navigation('/basket')}>Basket</a></li>
                        <li><a onClick={() => navigation('/wishlist')}>Wishlist</a></li>
                        <li><a onClick={() => navigation('/dashboard')} href>Admin panel</a></li>
                        <li><a href>Contact</a></li>
                    </ul>
                    <div className={styles.bar}>
                    <FaBars  className={styles.barIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header