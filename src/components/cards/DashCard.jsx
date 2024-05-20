import React from 'react'
import styles from './DashCard.module.scss'
import Button from '../buttons/Button'

const DashCard = ({ item, sil }) => {
  return (
    <div>
      <div className={styles.container}>
        <img src={item.thumbnail} alt="" />
        <div className={styles.textBox}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price} AZN</p>
        </div>
        <div className={styles.btnBox}>
          <Button text='SIL' onclick={sil} />

        </div>
      </div>
    </div>
  )
}

export default DashCard