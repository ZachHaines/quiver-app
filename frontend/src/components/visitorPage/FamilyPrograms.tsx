import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import leftImage from '../../images/eventPhotos/capitol_group.jpg';
import rightImage from '../../images/eventPhotos/biden.jpg';
// import rightImage from '../../images/jfk_wreath_laying.jpg'

const FamilyPrograms = () => {
  const nav = useNavigate();
  return (
    <section id='family-programs'>
      <StyledBackground>
        <Grid
          container
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Grid
            container
            direction='row'
            spacing={0}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <StyledImage src={leftImage} />
            </Grid>
            <Grid item>
              <StyledImage src={rightImage} />
            </Grid>
          </Grid>
          <StyledCard raised={true} >
            <CardContent>
              <StyledHeader variant='h3'>
                Join 1st SFC(A)'s Family Programs!
              </StyledHeader>
              <StyledBody variant='h5'>
                <ul>
                  <li>
                    <strong>Who We Are:  </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget risus porttitor, condimentum nisl in, suscipit enim.
                  </li>
                  <li>
                    <strong>What We Do:  </strong>Donec ornare pulvinar nisi, tristique blandit lacus rhoncus vitae. Curabitur in pretium nunc.
                  </li>
                  <li>
                    <strong>Why We Do It:  </strong>Pellentesque rhoncus arcu lacus, et fermentum mauris ornare quis, ac accumsan tellus tincidunt eu.
                  </li>
                  <li>
                    <strong>Who We're For:  </strong>Phasellus pellentesque metus vitae accumsan vestibulum. Nulla facilisi. Curabitur in pretium nunc. In consequat ipsum tortor.
                  </li>
                  <li>
                    <strong>How To Join:  </strong>In vel arcu mollis, vehicula leo ut, viverra odio. Cras rhoncus iaculis dui, eget.
                  </li>
                </ul>
              </StyledBody>
                <Button onClick={()=> nav('/login')} variant="contained" color='success'>
                  Join Now!
                </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </StyledBackground>
    </section>
  )
};

export default FamilyPrograms;

const StyledBackground = styled.div`
  background-color: #A8A9AD;
  padding: 48px;
`;

const StyledCard = styled(Card)`
  width: 960px;
  align-items: center;
`;

const StyledHeader = styled(Typography)`
  color: #024407;
  padding-bottom: 32px;
`;

const StyledBody = styled(Typography)`
  text-align: left;
  padding-left: 32px;
  text-align: justify;
  text-justify: inter-word;
`;

const StyledImage = styled.img`
  width: 720px; 
  height: 476px;
  alt: '1st SFC(A) Unit Logo';
  float: right;
  margin-bottom: -64px;
`;
