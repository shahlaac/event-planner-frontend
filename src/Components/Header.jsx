import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";




function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, }} >
        <AppBar position="static" sx={{ backgroundColor: '#c92c46' }}>
          <Toolbar>
            <IconButton
            
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <GiPartyPopper />
            </IconButton>
            <Typography variant="h6" fontWeight={'bold'} component="div" sx={{ flexGrow: 1 }}>
             Velvet Vows
            </Typography>
            
             <Link to={'/allbookings'}>          <Button color="inherit">Bookings
</Button>
            </Link>
            <Link to={'/'}>          <Button color="inherit"><FaHome />
</Button>
            </Link>        </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
