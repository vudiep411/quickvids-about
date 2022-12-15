import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['Home', 'Contact', 'Help', 'Privacy'];
  const drawerWidth = 240;
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (item) => {
    if(item === 'Home')
      navigate('/')
    else {
      const redirect = item.toLowerCase()
      navigate(`/${redirect}`)
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', marginBottom: '10px'}}>
      <Typography
        variant="h5"
        sx={{ 
              padding: '10px',
              marginTop: '10px',
              backgroundImage: 'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
      >
        <b>QuickVids</b>
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item)}>
              <ListItemText sx={{}}>
                <b>{item}</b>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
      <Box sx={{ display: 'flex', marginBottom: '80px'}}>
        <AppBar component="nav" color='inherit' elevation={0}>
          <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
            {/* Responsive on Mobile */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, right: '0%', position: 'absolute' }}
            >
              <MenuIcon />
            </IconButton>
              <Typography
                variant="h5"
                sx={{ 
                      display: { xs: 'none', sm: 'block' },
                      backgroundImage: 'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      cursor: 'pointer'
                    }}
                onClick={() => navigate('/')}                      
              >
                <b>QuickVids</b>
              </Typography>
              {/* Mobile display */}
              <Typography
                variant="h6"
                sx={{ 
                      display: { xs: 'block', sm: 'none' },
                      position: 'absolute',
                      left: '5%',
                      backgroundImage: 'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      cursor: 'pointer'
                    }}
                onClick={() => navigate('/')}
              >
                <b>QuickVids</b>
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                {navItems.map((item) => (
                  <Button 
                    key={item} 
                    sx={{ 
                      color: 'black', 
                      marginRight: '10px',
                      textTransform: 'none'
                    }}
                  onClick={() => handleClick(item)}
                  >
                    <b>{item}</b>
                  </Button>
                ))}
              </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
  )
}

export default Navbar