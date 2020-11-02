import React,{useState,useEffect} from 'react'
import {data} from '../ProductData/data'
import{ProductInfoContainer} from '../StyledComponent/styled'
interface props{
    title:string,
    price:number,
    // addToCart:(title:string,price:number)=>void
  
}
export const  ProductInfo:React.FC<props>=(props:props)=> {
   
    return (
      <div> title:{props.title}<br/>
      price:{props.price}

      </div>
           
  
       
    )
}
