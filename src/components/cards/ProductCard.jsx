import React from 'react'
import styles from './ProductCard.module.scss'
import Button from '../../components/buttons/Button'

const ProductsCard = ({item, goBasket, goWishlist}) => {
  return (
    <div className={styles.container}>
    <img src={item.thumbnail} alt="" />
    <div className={styles.textBox}>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{item.price} AZN</p>
    </div>
    <div className={styles.btnBox}>
        <Button text='goBasket' onclick={goBasket}/>
        <Button text='goWishlist' onclick={goWishlist}/>
    </div>
 </div>
  )
}

export default ProductsCard