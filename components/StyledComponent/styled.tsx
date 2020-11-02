import styled from 'styled-components'
 export const  FlexBox=styled.div`
 display:flex;
 
 

`;
export const Header=styled(FlexBox)`
width:100w;
height:60px
justify-content:space-around;
background-color:#bbb
`
export const AppContainer=styled(FlexBox)`
 overflow-x:hidden;
 flex-wrap:wrap
  


`
export const ProductListContainer=styled.div`
flex-wrap:wrap;
display:flex;
justify-content:space-around
width:500px;
height:200px;
border:1px solid #ddd;
border-radius:5px;
box-shadow:1px 1px 1px #eee;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
`
export const ProductInfoContainer=styled.div`
width:200px;
border:1px solid #ddd;
border-radius:5px;
box-shadow:1px 1px 1px #eee;
display:flex;

align-items:center;
text-align:center;

`
export const CartContainer= styled.div`{
    position:absolute;
    top:1px;
    right:90px;
   width:100px;
    color:black;
    text-align:center;
    border:1px solid white;
}`