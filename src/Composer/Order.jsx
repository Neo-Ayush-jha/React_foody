import { TableBody, TableCell,Paper,Table, TableContainer, TableRow, Button, Typography } from "@mui/material";
import { useState } from "react";
const OrderItem=(props)=>{
    let [count,setCount] = useState(props.qty);
    const handlePlus = () =>{
        setCount(count=count+1);
        props.handleCount(count,props.name);
    }
    const handleMinus = () =>{
        setCount(count=count-1);
        props.handleCount(count,props.name);
    }
    return(
        <TableRow>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.price}</TableCell>
            <TableCell sx={{display:"flex"}} >
                <Button variant="contained" size="small"   sx={{padding:'0px'}} color="error" onClick={()=>handleMinus()}>-</Button>
                <Typography variant="h6">{props.qty}</Typography>
                <Button variant="contained" color="success" onClick={()=> handlePlus()}>+</Button>
                </TableCell>
            <TableCell>{props.price * props.qty}</TableCell>
            <TableCell>
                <Button variant="contained" sx={{backgroundColor:'black',padding:'0px'}} >X</Button>
            </TableCell>
        </TableRow>
    )
}

export default function Order(props){
    const handleCount = (count,name) =>{
        props.handleCount(count,name);
    }
    return(
        <>
            <TableContainer component={Paper} sx={{manageTop:'20px',marginTop:'30px'}}>
                <Table>
                    <TableRow>
                        <TableCell variant="h4">Product Name</TableCell>
                        <TableCell variant="h4">Unit Price</TableCell>
                        <TableCell variant="h4">Qty</TableCell>
                        <TableCell variant="h4">Total</TableCell>
                        <TableCell variant="h4">Delete</TableCell>
                    </TableRow>
                    {
                        props.orderData.map((value,key)=>(
                            <OrderItem key={key} handleCount={((count,name)=>handleCount(count,name))} name={value.name} price={value.price} qty={value.qty}/>
                        ))
                    }
                    <TableBody>
                        {/* <OrderItem /> */}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
// export default OrderItem;