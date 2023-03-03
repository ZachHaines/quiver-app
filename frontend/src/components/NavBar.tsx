import { Link } from 'react-router-dom';
import styled from 'styled-components'
import unitInsignia from '../images/unit_insignia_small.png';
/* MUI Imports */
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import PollIcon from '@mui/icons-material/Poll';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const NavBar = () => {
  return (
    <AppBar position='static' style={{ background: '#024407' }}>
        
          <Toolbar>
            <Link to='/'>
              <IconButton size='small' edge='start' color='inherit' aria-label='logo'>
                <img src={unitInsignia} style={{height:"40px", width:'auto'}} alt="SF Logo" />
              </IconButton>
              </Link>
            <Box display='flex' flexGrow={1}>
              <Link to='/' style={{ color: 'inherit', textDecoration: 'none'}}>
                <StyledNavTitle>QUIVER</StyledNavTitle>
              </Link>
            </Box>
            <Typography variant='h5' component='div' style={{padding: '0 32px', display: 'inline-flex'}}>
              <StyledLink to="/network">
                <PeopleIcon/>
                My Network
              </StyledLink>
              <StyledLink to="/messaging">
                <MessageIcon />
                Messaging
              </StyledLink>
              <StyledLink to="/events">
                <EventIcon />
                Events</StyledLink>
              <StyledLink to="/surveys">
                <PollIcon />
                Surveys
              </StyledLink>
              <StyledLink to="/resources">
                <TravelExploreIcon />
                Resources
              </StyledLink>    
            </Typography>
      
              <Typography variant='h5' component='div' style={{padding: '0 8px 0 32px', display: 'inline-flex'}}>
              <StyledLink to="/profile">
                <AccountCircleIcon  />
                Me
              </StyledLink> 
            </Typography>
       
          </Toolbar>
      
    </AppBar>
  )

}

export default NavBar;


const StyledNavTitle = styled.h1`
  color: white;
  padding: 0 32px 0 8px;
  text-shadow: 2px 2px 5px black;
  &:active {
    text-shadow: none;
  }
  &:hover {
    color: #ECD592;
  }
  `;
  
  const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bold;
  justify-content: center;
  text-decoration: none;
  text-shadow: 2px 2px 5px black;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  &:active {
    text-shadow: none;
    font-weight: normal;
  }
  &:hover {
    color: #ECD592;
  }
`;
