import React, { useState ,useEffect} from 'react'
import{data, salleInfo} from '../ProductData/data'
import{Cart} from '../CartComponent/Cart'
import{FlexBox,ProductListContainer} from '../StyledComponent/styled'
import{ProductInfo} from '../ProductInfoComponent/ProductInfo'
 interface props{
     addcart:(title:string,price:number,quantity:number)=>void
 }
export  const ProductList:React.FC<props>=(props:props)=> {
    const [quantity,setQuantity]=useState<number>(0)
    const [cartData,setCart]=useState<Array<any>>([])
//   const AddCart=(title:string,price:number,quantity:number)=>{
   
//     setCart([...cartData,{title,price,quantity}
//     ])
//   };
    // const [rating,setRating]=useState<number>(0)
    // const[cartData,setCart]=useState<Array<any>>([])
    // const[ratingStatus,setStatus]=useState<boolean>(false)
    const handleQuantity=(e:any)=>{
        e.preventDefault()
     setQuantity(parseInt(e.target.value))
    }
    // const handleChangeRating=(e:any)=>{

    //     setRating(parseInt(e.target.value))
    //   console.log(rating)

    //    }
    //    const handleUpdateRating=()=>{
    //  alert("hi")
    //     salleInfo.rating++
    //     setStatus(false)
    //    }
    //    const changeStatus=(e:any)=>{
         
    //      setStatus(true)
    //    }
    return (
        
      
        
        <div>
            {
                    // <Cart list={cartData}/>
            }
            {
               
    
       
                data?.map(ele=>{
                    return(
                        
                         <ProductListContainer>
                            
           
                  <ProductInfo title={ele.title} price={ele.price}/>
            
                      
                          
                         <input type="number" onChange={handleQuantity}/>   
                         <button onClick={()=>{props.addcart(ele.title,ele.price,quantity)}}> AddtoCart</button>
                    
                         </ProductListContainer>
                        
                        
                      
                    )
                    
                })
                
               
            }
           
        </div>
      
    )
}
