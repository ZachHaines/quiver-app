import styled from 'styled-components';
// import heroImage from '../../images/soldier-silhouette.png';
import heroImage from '../../images/jfk_wreath_laying.jpg';
import { Typography } from '@mui/material'


const HeroFrame = () => {
  
  return (
    <section id='landing'>
      <StyledBackground>
        <StyledImg src={heroImage} alt="Hero Image" />
        <StyledHeader variant='h3'>
          <em>"We Recruit Soldiers — We Retain Families"</em>
        </StyledHeader>
        <StyledSubHeader variant='h4' >
          Quiver is 1st SFC(A)’s official app for connecting service members 
          and family members to resources and events.
        </StyledSubHeader>
      </StyledBackground>
    </section>
  )
};

export default HeroFrame;

const StyledBackground = styled.div`
  background-color: #1F1F22;
`;

const StyledHeader = styled(Typography)`
  color: white;
  padding-top: 24px;
`;

const StyledSubHeader = styled(StyledHeader)`
  text-align: center;
  padding-bottom: 80px;
  padding-right: 25%;
  padding-left: 25%;
`;

const StyledImg = styled.img`
  height: 640px; 
  width: auto;
  border: thin solid black;
  box-shadow: 4px 8px 8px black;
  margin-top: 32px;
`;

