import { Grid } from "@mui/material";
// import RecipeCard from './RecipeCard';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";


function RecipeCard(props){
    const handelClick = ()=>{
        props.handelClickProps();
        console.log("woo!!");
    }
    return(
        <Card onClick={handelClick}>
            <CardMedia src={props.img} component="img" style={{height:'200px'}}/>
                <CardContent>
                    <Typography variant="h5">{props.title}</Typography>
                    <Typography variant="inherit">Rs. {props.price} /-</Typography>
                </CardContent>
        </Card>
    )
}
export default function Content(props){
    // const [product,getProduct] = useState(props.product);
        const handelClickContent = () =>{
        props.addOrder();
        console.log('content');
    }
    return(
        <Grid container spacing={2} p={2}>
        {           
            props.data.map((value,key)=>{(
                <Grid key={key} item lg={3}>
                    <RecipeCard img={value.img} title={value.title} price={value.price} handelClickProps={handelClickContent} />
                </Grid>
            )})
        }        
    </Grid>
    )
}