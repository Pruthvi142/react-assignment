import React, {useEffect}from 'react'
import {FlexBox ,CartContainer} from '../StyledComponent/styled'
interface Props{
    list:any
}
let total:number=0
let final:number=0
export  const  Cart:React.FC<Props>=(props:Props)=> {
    useEffect(() => {
        console.log("hi")
        },[] )
    return (
             
             <CartContainer>
                 {
                     <div>

                 <h6>tottal:{total}</h6>
                 <h6>item:{props.list?.length}</h6>
                     </div>
               
                  
                 }
                 {
                     props.list?.map((ele:any)=>{
                         <FlexBox>
                               <div>
                 <p> total{total=ele.price*ele.quantity}</p>  
                         </div> 
                             </FlexBox>
                       
                
                        
                  
             
                     })
                    
                 }
                 {
                     console.log("cart")
                 }
                
          </CartContainer>
           
        
    )
}
