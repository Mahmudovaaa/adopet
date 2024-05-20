import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashCard from '../../components/cards/DashCard'
import Header from '../../components/header/Header'

const Dashboard = () => {
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
    const deleteItem =(id) => {
        axios.delete(`https://66473ee251e227f23ab1a4de.mockapi.io/Basket/${id}`)
        setTimeout(() => {
            getData()
        }, 500);
    }

  return (
  <div style={{display:'flex', flexDirection:'column'}}>
<Header/>
<div style={{display:'flex', width:'100%', flexDirection:'column'}}>
{data && data.map(item => <DashCard item={item} sil={() => deleteItem(item.id)}/>)}
</div>
  </div>
  )
}

export default Dashboard