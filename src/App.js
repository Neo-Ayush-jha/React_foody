import React from "react";
import Header from './Composer/Header';
import Content from './Composer/Content';
import Category from './Composer/Category';
import Order from './Composer/Order';
import {Grid} from '@mui/material';
import { Container} from '@mui/system'
import bg from './images/bg.jpg';
import abc from './images/abc.jpg';
import rol from './images/rol.jpg';
import fing from './images/fing.webp';
import { useState } from "react";



const RecipeData=[
  {
  img:bg,
  title:'Burger',
  price:50
  },
  {
  img:rol,
  title:'Egg roll',
  price:50
  },
  {
  img:fing,
  title:'Frinch fry',
  price:50
  },
  {
  img:abc,
  title:'Burgers',
  price:50
  }
]
// const orderData=[
//   {
//     name:'Burger',
//     price:'500',
//     qty:5,
//   },
//   {
//     name:'Frinch fry',
//     price:'100',
//     qty:2,
//   },
//   {
//     name:'Egg roll',
//     price:'300',
//     qty:3,
//   },
// ]
function App() {
  const [orderData , setOrderData] = useState([]);
  const  handelClickContent = (data) =>{
    let checkArray = orderData.find((item)=> item.name == data.title)
    if(checkArray === undefined){
      setOrderData([...orderData,{name:data.title,price:data.price,qty:1,total:data.price*1}])
    }
    else{
      setOrderData(orderData.map((item) => item.name == data.title? {...item,qty:item.qty+1}:item))
    }
    console.log(checkArray);
    console.log("it's work" + data);
  } 
    const handleCount = (count,name) =>{
      setOrderData(orderData.map((item) => item.name == name? {...item,qty:count}:item))
    }
  return(
    <>
     <Header sx={{marginTop:'10'}}/>
      {/* <h1>test</h1> */}
       <Container maxWidth = 'xl' >
         <Grid container>
           <Grid item lg={2}>
            <Category/>
           </Grid>
         <Grid item lg={7}>
           <Content handelClickContent={(data)=>handelClickContent(data)} data={RecipeData}/>
         </Grid>
         <Grid item lg={3}>
            <Order handleCount={((count,name)=>handleCount(count,name))}  orderData={orderData}/>
         </Grid>
         </Grid>
       </Container>
    </>
)
}
export default App;
