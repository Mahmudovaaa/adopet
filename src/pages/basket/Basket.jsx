import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import ProductCardBasket from '../../components/cards/ProductCardBasket'

const Basket = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://66473ee251e227f23ab1a4de.mockapi.io/Basket')
        .then(res => {
            setData(res.data)
        })
    }
    useEffect(() => { 
        getData()
    },[])
    const removeItem = (id) =>{
        axios.delete(`https://66473ee251e227f23ab1a4de.mockapi.io/Basket/${id}`)
        setTimeout(() => {
            getData()
        }, 500);
    }

  return (
    <div>
        <Header/>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1>Products</h1>
        <div style={{display:'flex', width:'100%', flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {data && data.map(item => <ProductCardBasket item={item} sil = {() => removeItem(item.id)}/>)}
        </div>
      </div>
    </div>
  )
}

export default Basket