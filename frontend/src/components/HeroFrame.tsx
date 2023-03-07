import styled from 'styled-components';
import heroImage from '../images/soldier-silhouette.png'
import { Typography } from '@mui/material'


const HeroFrame = () => {
  
  return (
    <>
      <StyledBackground>
        <img src={heroImage} height='640px' width='100%' alt="Hero Image" />
        <StyledHeader variant='h3'>
          Special Operations Begins & Ends With Family
        </StyledHeader>
        <StyledSubHeader variant='h4' >
          Quiver is 1st SFC(A)’s official app for connecting service members and family members to resources and events.
        </StyledSubHeader>
      </StyledBackground>
    </>
  )
};

export default HeroFrame;

const StyledBackground = styled.div`
  background-color: #1F1F22;
  padding: 0;
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

