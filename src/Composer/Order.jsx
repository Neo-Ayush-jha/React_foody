import { TableBody, TableCell,Paper,Table, TableContainer, TableRow, Button, Typography } from "@mui/material";
import { useState } from "react";
const OrderItem=(props)=>{
    let [count,setCount] = useState(props.qty);
    return(
        <TableRow>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.price}</TableCell>
            <TableCell sx={{display:"flex"}} >
                <Button variant="contained" size="small"   sx={{padding:'0px'}} color="error" onClick={()=>setCount(count=count-1)}>-</Button>
                <Typography variant="h6">{count}</Typography>
                <Button variant="contained" color="success" onClick={()=> setCount(count=count+1)}>+</Button>
                </TableCell>
            <TableCell>{props.price * props.qty}</TableCell>
            <TableCell>
                <Button variant="contained" sx={{backgroundColor:'black',padding:'0px'}} >X</Button>
            </TableCell>
        </TableRow>
    )
}

export default function Order(props){
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
                            <OrderItem key={key} name={value.name} price={value.price} qty={value.qty}/>
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