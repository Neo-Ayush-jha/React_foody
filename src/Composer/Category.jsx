import { MenuItem, MenuList, Paper, Typography } from "@mui/material";
const Category=()=>{
    return(
        <Paper sx={{backgroundColor:'success' , marginTop:'5'}} >
            <MenuList>
                <MenuItem><Typography>Roll</Typography></MenuItem>
                <MenuItem><Typography>Biryane</Typography></MenuItem>
                <MenuItem><Typography>Dosa</Typography></MenuItem>
                <MenuItem><Typography>Momos</Typography></MenuItem>
                <MenuItem><Typography>Chowmin</Typography></MenuItem>
                <MenuItem><Typography>Egg roll</Typography></MenuItem>
                <MenuItem><Typography>Piza</Typography></MenuItem>
                <MenuItem><Typography>Burger</Typography></MenuItem>
            </MenuList>
        </Paper>
    )
}
export default Category;