import { Grid } from "@mui/material";
// import RecipeCard from './RecipeCard';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { useState } from "react";


function RecipeCard(props){
    const handelClick = (data)=>{
        props.handelClickContent(data);
        console.log("woo!!" + data);
    }
    return(
        <Card onClick={()=>handelClick(props.data)}>
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
        const handelClickContent = (data) =>{
            console.log('content' + data);
        props.handelClickContent(data);
    }
    return(
        <Grid container spacing={2} p={2}>
        {           
            props.data.map((value,key)=>(
                <Grid key={key} item lg={3}>
                    <RecipeCard 
                        img={value.img} 
                        title={value.title} 
                        price={value.price} 
                        data={value} 
                        handelClickContent={(data)=>handelClickContent(data)} 
                    />
                </Grid>
            ))
        }        
    </Grid>
    )
}