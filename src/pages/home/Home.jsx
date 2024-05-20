import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import ProductsCard from '../../components/cards/ProductCard'
import SectionOne from '../../components/sectionOne/SectionOne'
import SectionTwo from '../../components/sectionTwo/SectionTwo'
import SectionTree from '../../components/sectionTree/SectionTree'
import Footer from '../../components/footer/Footer'
const Home = () => {
const [data, setData] = useState ([])

const getData = () => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
        setData(res.data.products)
    })
}
useEffect(() => { 
    getData()
},[])

const goBasket = (item) => {
    axios.post('https://66473ee251e227f23ab1a4de.mockapi.io/Basket',item)
}

const goWishlist = async (product) => {
    await axios.get('https://66473ee251e227f23ab1a4de.mockapi.io/Wishlist')
    .then(res => {
        console.log(res.data);
        const db =res.data
        const pro = db.find(item => item.id === product.id)
        if(pro){
            alert('datamiz artik var')
        }
        else(
            axios.post('https://66473ee251e227f23ab1a4de.mockapi.io/Wishlist', product)
        )
    })
}

  return (
  <div>
    <Header/>
    <SectionOne/>
<SectionTwo/>
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1>Products</h1>
        <div style={{display:'flex', width:'100%', flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {data && data.map(item => <ProductsCard item={item} goBasket={() => goBasket(item)} goWishlist={() => goWishlist(item)} />)}
        </div>
      </div>
      <SectionTree/>
      <Footer/>
  </div>

  )
}

export default Home