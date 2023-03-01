import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import unitInsignia from '../images/unit_insignia_small.png'

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        
          <Link to='/'>
            <IconButton size='small' edge='start' color='inherit' aria-label='logo'>
              <img src={unitInsignia} style={{height:"40px", width:'auto'}} className="icon-logo" alt="SF Logo" />
            </IconButton>
          </Link>
          <Typography variant='h6' component='div'>
            <Link to="/">Home</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/contact">Contact Us</Link> |
            <Link to="/member">Members</Link> | 
            <Link to="/network">My Network</Link> | 
            <Link to="/messaging">Messaging</Link> | 
            <Link to="/events">Events</Link> | 
            <Link to="/surveys">Surveys</Link> | 
            <Link to="/resources">Resources</Link> | 
          </Typography>
      </Toolbar>
    </AppBar>

  )

}

export default NavBar;