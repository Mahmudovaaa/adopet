import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import styles from './Footer.module.scss'
const Footer = () => {
  return (
  <div className={styles.footerDiv}>
    <div className={styles.copyright}>
        <p>Copyright ©2024 All rights reserved | This template is made with <FaRegHeart style={{fontSize:'13'}}/> by Colorlib</p>
    </div>
  </div>
  )
}

export default Footer