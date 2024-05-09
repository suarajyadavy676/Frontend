import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

function Products() {
  let [data,setData] = useState([])

  const fetchProducts = async() => {
    //for development
    // let res = await axios.get("http://localhost:3000/products")
    // for productuon
    let res = await axios.get(`${import.meta.env.REACT_APP_API_URL}products`)
    console.log(res.data)
    setData(res.data)
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div className='my-14 w-[90%] mx-auto grid grid-cols-4 justify-between gap-10'>
      {data.map(ele=><Card data={ele} key={ele._id}/>)}
    </div>
  )
}

export default Products
