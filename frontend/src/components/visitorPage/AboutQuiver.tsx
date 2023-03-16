import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';
import calendarImage from '../../images/aboutQuiver/calendar.png';
import networkImage from '../../images/aboutQuiver/network.png';
import signPostImage from '../../images/aboutQuiver/sign_post.png';
import surveyImage from '../../images/aboutQuiver/survey.png';



const AboutQuiver = () => {

  return (
    <section id='about-quiver'>
      <StyledBackground>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='flex-start'
          spacing={6}
        >
          <Grid item xs={12} sm={6}>
            <StyledImg src={calendarImage} alt='calendar' />
            <StyledHeader variant='h4' >
              SCHEDULING SIMPLIFIED
            </StyledHeader>
            <StyledSubHeader variant='h4'>
              One app for registering for events and appointments.
            </StyledSubHeader>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledImg src={signPostImage} alt='sign post of resources' />
            <StyledHeader variant='h4' >
              RELEVANT RESOURCES
            </StyledHeader>
            <StyledSubHeader variant='h4'>
              Receive relevant info, resources, and events, even if you move units.
            </StyledSubHeader>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledImg src={surveyImage} alt='completing survey on tablet' />
            <StyledHeader variant='h4' >
              GROW THE PROGRAM
            </StyledHeader>
            <StyledSubHeader variant='h4'>
              Streamline and improve feedback engagement directly from the app.
            </StyledSubHeader>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledImg src={networkImage} alt='networking of people icon' />
            <StyledHeader variant='h4' >
              FAMILY NETWORK
            </StyledHeader>
            <StyledSubHeader variant='h4'>
              Expand a network of families from event to event and unit to unit.
            </StyledSubHeader>
          </Grid>
        </Grid>
      </StyledBackground>
    </section>
  )
};

export default AboutQuiver;

const StyledBackground = styled.div`
  padding: 80px;
  background-color: #1F1F22;
`;

const StyledHeader = styled(Typography)`
  color: #42DF4E;
  padding-top: 16px;
`;
const StyledSubHeader = styled(Typography)`
  color: white;
  text-align: center;
  padding-top: 8px;
  padding-left: 5%;
  padding-right: 5%;
`;
const StyledImg = styled.img`
  height: 240px; 
  width: auto;
`;
