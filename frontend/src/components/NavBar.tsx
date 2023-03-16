import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'
import unitInsignia from '../images/unit_insignia_small.png';
/* MUI Imports */
import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import PollIcon from '@mui/icons-material/Poll';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const NavBar = () => {
  const nav = useNavigate();

  const AppLogoTitle = () => {
    return (
      <>
        <Link to='/'>
          <IconButton size='small' edge='start' color='inherit' aria-label='logo'>
            <img src={unitInsignia} style={{ height: "48px", width: 'auto' }} alt="SF Logo" />
          </IconButton>
        </Link>
        <Box display='flex' flexGrow={1}>
          <Link to='/' 
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <StyledNavTitle>QUIVER</StyledNavTitle>
          </Link>
        </Box>
      </>
    )
  };

  const MemberNavLinks = () => {
    return (
      <>
        <Typography variant='h6' component='div' style={{ padding: '0 32px', display: 'inline-flex' }}>
          <StyledLink to="/network">
            <PeopleIcon sx={{ fontSize: 32 }} />
            My Network
          </StyledLink>
          <StyledLink to="/messaging">
            <MessageIcon sx={{ fontSize: 32 }} />
            Messaging
          </StyledLink>
          <StyledLink to="/events">
            <EventIcon sx={{ fontSize: 32 }} />
            Events
          </StyledLink>
          <StyledLink to="/surveys">
            <PollIcon sx={{ fontSize: 32 }} />
            Surveys
          </StyledLink>
          <StyledLink to="/resources">
            <TravelExploreIcon sx={{ fontSize: 32 }} />
            Resources
          </StyledLink>
        </Typography>
        <Typography variant='h6' component='div' style={{ paddingLeft: '32px' }}>
          <StyledLink to="/profile">
            <AccountCircleIcon sx={{ fontSize: 32 }} />
            Me
          </StyledLink>
        </Typography>
      </>
    )
  };

  const VisitorNavLinks = () => {
    return (
      <>
        <Typography 
          variant='h6' 
          component='div' 
          style={{ padding: '0 32px', display: 'inline-flex' }}
        >
          <StyledHashLink smooth to="/#top">
            Top
          </StyledHashLink>
          <StyledHashLink smooth to="/#about-unit">
            About 1st SFC(A)
          </StyledHashLink>
          <StyledHashLink smooth to="/#family-programs">
            Family Programs
          </StyledHashLink>
          <StyledHashLink smooth to="/#about-quiver">
            The App
          </StyledHashLink>
          <StyledHashLink smooth to="/#resources">
            Resources
          </StyledHashLink>
          <StyledHashLink smooth to="/#contact">
            Contact
          </StyledHashLink>
        </Typography>
        <Typography variant='h6' component='div' style={{ paddingLeft: '32px' }}>
          <Button variant='contained' onClick={()=> nav('/login')}>
            Login
          </Button>
        </Typography>
      </>
    )
  };

  return (
    <AppBar
      id='top'
      position='sticky'
      style={{ background: '#024407' }}>
      <Toolbar>
        <AppLogoTitle />
        {/* <MemberNavLinks /> */}
        <VisitorNavLinks />
      </Toolbar>
    </AppBar>
  )
};

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
  text-decoration: none;
  text-shadow: 2px 2px 5px black;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:active {
    text-shadow: none;
    font-weight: normal;
  }
  &:hover {
    color: #ECD592;
  }
`;

const StyledHashLink = styled(HashLink)`
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 2px 2px 5px black;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:active {
    text-shadow: none;
    font-weight: normal;
  }
  &:hover {
    color: #ECD592;
  }
`;
