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



const RecipeData=[
  {
  img:bg,
  title:'Burger',
  price:'50'
  },
  {
  img:rol,
  title:'Egg roll',
  price:'50'
  },
  {
  img:fing,
  title:'Frinch fry',
  price:'50'
  },
  {
  img:abc,
  title:'Burger',
  price:'50'
  }
]
const orderData=[
  {
    name:'Burger',
    price:'500',
    qty:5,
  },
  {
    name:'Frinch fry',
    price:'100',
    qty:2,
  },
  {
    name:'Egg roll',
    price:'300',
    qty:3,
  },
]
const App = () => {
  const  handelClickContent = () =>{
      console.log("it' work");
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
           <Content data={RecipeData}/>
         </Grid>
         <Grid item lg={3}>
            <Order orderData={orderData}/>
         </Grid>
         </Grid>
       </Container>
    </>
)
}
export default App;
