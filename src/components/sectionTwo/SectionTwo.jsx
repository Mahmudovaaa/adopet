import React from 'react'
import styles from './SectionTwo.module.scss'

const SectionTwo = () => {
  return (
  <div className={styles.secTwo}>
    <div className={styles.secTop}>
<div className={styles.twoImg}>
<img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg" alt="" />
</div>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae.</p>
<button>Adopt a child now</button>
    </div>
    <div className={styles.secBottom}>
        <h2>Step to adopt & foster a child</h2>
        <select className={styles.select} name="1.Getting started" id="">
            <option value="">
            1.Getting started
            </option>
        </select>
        <select className={styles.select} name="1.Getting started" id="">
        <option value="">
            1.Getting started
            </option>
        </select>
        <select className={styles.select}  name="1.Getting started" id="">
        <option value="">
            1.Getting started
            </option>
        </select>
        <select className={styles.select}  name="1.Getting started" id="">
        <option value="">
            1.Getting started
            </option>
        </select>
        <select className={styles.select} name="1.Getting started" id="">
        <option value="">
            1.Getting started
            </option>
        </select>
        <select className={styles.select}  name="1.Getting started" id="">
        <option value="">
            1.Getting started
            </option>
        </select>
        <select className={styles.select}  name="1.Getting started" id="">
        <option value="">
            1.Getting started
            </option>
        </select>
    </div>
  </div>
  )
}

export default SectionTwo