import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';

const ContactLink = () => {
  const nav = useNavigate();
  return (
    <section id='contact'>
      <StyledBackground>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <StyledCard raised={true} style={{ backgroundColor: '#1F1F22' }} >
            <CardContent>
              <StyledHeader variant='h2'>
                Have Questions?
              </StyledHeader>
              <StyledBody variant='h4'>
                Reach out and discover what 1st SFC(A)’s Family Programs can do for you and your family!
              </StyledBody>
            </CardContent>
            <CardContent>
              <Button 
                variant="contained" color='success'
                onClick={()=> nav('/contact') }  
              >
                Contact Us →
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </StyledBackground>
    </section>
  )
};

export default ContactLink;

const StyledBackground = styled.div`
  background-color: #A8A9AD;
  padding: 48px;
`;

const StyledCard = styled(Card)`
  width: 960px;
  backgroundColor: blue;
  align-items: center;
  margin: 150px;
`;

const StyledHeader = styled(Typography)`
  color: white;
  padding-bottom: 32px;
`;

const StyledBody = styled(Typography)`
  padding-left: 32px;
  text-align: center;
  color: white;
`;

const StyledImage = styled.img`
  width: 720px; 
  height: 476px;
  alt: '1st SFC(A) Unit Logo';
  float: right;
  margin-bottom: -64px;
`;
