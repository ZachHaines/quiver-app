import styled from 'styled-components';
import { Typography } from '@mui/material'
import logo from '../../images/1SFC-logo-new.png'


const AboutUnit = () => {

  return (
    <section id='about-unit'>
      <StyledBackground>
        <StyledHeader variant='h2' id='aboutUnit'>
          About 1st Special Forces Command (Airborne)
        </StyledHeader>
        <StyledImage src={logo} />
        <StyledSubHeader variant='h4'>
          Our Vision
        </StyledSubHeader>
        <StyledBody variant='h5'>
          We are the premier partnered Irregular Warfare force.
        </StyledBody>
        <StyledSubHeader variant='h4'>
          Our Mission
        </StyledSubHeader>
        <StyledBody variant='h5'>
          1st Special Forces Command (Airborne) trains, mans, and equips Special Operations Forces Soldiers & units to conduct special operations worldwide in support of GCC, U.S. Ambassador and the Nation’s priorities. On order, 1st Special Forces Command (Airborne) deploys a Special Operations Headquarters to conduct Mission Command of Special Operations, Conventional, Joint, and/or Coalition Forces anywhere in the world in support of GCC, U.S. Ambassador and the Nation’s priorities.
        </StyledBody>
        <StyledSubHeader variant='h4'>
          Our Culture
        </StyledSubHeader>
        <StyledBody variant='h5'>
          Our culture enables everything we do, and is defined through our five organizational values. <strong>Excellence</strong> is the relentless  pursuit of mastery in our craft from the individual to the organization level. <strong>Commitment</strong> is our unwavering  dedication to our <strong>Families</strong>, the Team, and the  Nation. <strong>Accountability</strong> is understanding internalizing and enforcing standards. <strong>Trust</strong> is our growth and development using decentralized leadership model to encourage discipline initiative at the lowest level.
        </StyledBody>
      </StyledBackground>
    </section>
  )
};

export default AboutUnit;

const StyledBackground = styled.div`
  background-color: white;
  padding: 48px;
`;

const StyledHeader = styled(Typography)`
  color: #024407;
  padding: 32px;
`;

const StyledSubHeader = styled(Typography)`
  color: #024407;  
  text-align: left;
  padding-top: 40px;
  padding-bottom: 8px;
`;

const StyledBody = styled(Typography)`
  text-align: left;
  padding-left: 32px;
  text-align: justify;
  text-justify: inter-word;
`;

const StyledImage = styled.img`
  width: 424px; 
  height: auto; 
  alt: '1st SFC(A) Unit Logo';
  float: right;
  margin-left: 32px;
  margin-bottom: 32px;
`;
