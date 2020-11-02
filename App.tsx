import React, {useState ,useEffect}from 'react';
import {data} from './components/ProductData/data'
import {ProductList} from './components/ProductListComponent'
import{Cart} from './components'

import { Header,AppContainer, FlexBox } from './components/StyledComponent/styled'
// interface Props{
//   addCart:(title:string,price:number,quantity:number)=>void
// }

const  App:React.FC=()=>{
  
  const [cartData,setCart]=useState<Array<any>>([])
  const AddCart=(title:string,price:number,quantity:number)=>{
   
    setCart([...cartData,{title,price,quantity}
    ])
  };
  // useEffect(()=>{
  //   const AddCart=(title:string,price:number,quantity:number)=>{
   
  //     setCart([...cartData,{title,price,quantity}
  //     ])
  //   };
  // },[])
  return (
    <div>
      <Header>
<FlexBox>
<h1>Hi</h1>
</FlexBox>
        <Cart list={cartData}/>
       
    
      </Header>
      <AppContainer>
    
        <ProductList addcart={AddCart}/>
  
      </AppContainer>
      {
        console.log("app render")
      }
     
    </div>
  );
}

export default App;
