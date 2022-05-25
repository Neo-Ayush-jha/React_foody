import { AppBar, Avatar, Badge, Button, Toolbar, Typography } from '@mui/material';
import {Box} from '@mui/system'; 
import AddIcon from '@mui/icons-material/Add';
import SettingIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';

const Header=()=>{
    return(
        <AppBar position='static' color='warning'>
            <Toolbar>
                <Box sx={{flex:1.8}}>
                    <Button color='inherit'>KeyBoard</Button>
                    <Button color='inherit'><Badge color="info" badgeContent="10">OrderItem</Badge></Button>
                    <Button color='inherit'>Take Away</Button>
                    <Button color='inherit'><Badge color="success" badgeContent="6">Deliverey</Badge></Button>
                </Box>
                <Typography sx={{fontWeight:'500', fontSize:23,flex:0.7}}>Ecom Store</Typography>
                <Box sx={{flex:1.9}}>
                    <Button color='inherit'>Sales Return</Button>
                    <Button color='inherit'>New<AddIcon /></Button>
                    <Button color='inherit'>K.O.T</Button>
                    <Button color='inherit'>Hold</Button>
                    <Button color='inherit'>UnHold</Button>
                    <Button color='inherit'><Avatar><SettingIcon fontSize='small'/></Avatar></Button>
                    <Button color='inherit'><Avatar><LoginIcon fontSize='small'/></Avatar></Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header;