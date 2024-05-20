import React from 'react'
import styles from './SectionTree.module.scss'

const SectionTree = () => {
  return (
    <div className={styles.secTree}>
        <div className={styles.container}>
           <div className={styles.featured}>
           <h1>FEATURED STORIES</h1>
           </div>
           <div className={styles.sectionImage}>
           <div className={styles.treeImg}>
                <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_1.jpg" alt="" />
            </div>
            <div className={styles.treeImg}>
                <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="" />
            </div>
            <div className={styles.treeImg}>
                <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg" alt="" />
            </div>
           </div>
        </div>
    </div>
  )
}

export default SectionTree