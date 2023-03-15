import styled from 'styled-components';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import gbLogo from '../../images/resourceLogos/gbf-logo.png';
import sowfLogo from '../../images/resourceLogos/sowf-logo.png';
import msofcLogo from '../../images/resourceLogos/msofc-logo.png';
import wwpLogo from '../../images/resourceLogos/wwp-logo.png';


const GeneralResources = () => {

  return (
    <StyledBackground>
      <StyledHeader variant='h2'>
        Family Programs General Resources
      </StyledHeader>
      <Grid
        container
        spacing={3}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        {resources.map((el, i) => {
          return (
            <Grid item xs={3} key={i}>
              <Card raised={true}
                sx={{
                  width: '360px',
                  height: '400px',
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  marginBottom: '32px'
                }}
              >

                <CardContent>
                  <img src={el.image} height='64px' width='auto' />
                  <StyledSubHeader variant='h5'>
                    {el.name}
                  </StyledSubHeader>

                  <Typography variant='h6'>
                    {el.location}
                  </Typography>
                </CardContent>

                <CardContent>

                  <Grid container direction='row' alignItems='center'>
                    <PhoneIcon sx={{ padding: '8px 8px 8px 0' }} />
                    {el.phone}
                  </Grid>
                  <Grid container direction='row' alignItems='center'>
                    <PublicIcon sx={{ padding: '8px 8px 8px 0' }} />
                    <a href={el.website}>Website</a>
                  </Grid>

                  <Grid container direction='row' alignItems='center'>
                    <EmailIcon sx={{ padding: '8px 8px 8px 0' }} />
                    <a href={el.email}>Email</a>
                  </Grid>

                  <Grid container direction='row' alignItems='center'>
                    <FacebookIcon sx={{ padding: '8px 8px 8px 0' }} />
                    <a href={el.facebook}>Facebook </a>
                  </Grid>

                  <Grid container direction='row' alignItems='center'>
                    <TwitterIcon sx={{ padding: '8px 8px 8px 0' }} />
                    <a href='https://www.google.com'>Twitter</a>
                  </Grid>

                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </StyledBackground>

  )
};

export default GeneralResources;

const StyledBackground = styled.div`
  background-color: #F3F3F3;
  padding: 48px;
`;

const StyledHeader = styled(Typography)`
  color: #024407;
  padding-bottom: 32px;
`;

const StyledSubHeader = styled(Typography)`
  color: #024407;  
  text-align: center;
  padding: 8px 0;
`;

const StyledBody = styled(Typography)`
  text-align: left;
  padding: 8px;
`;

const StyledImage = styled.img`
  width: 424px; 
  height: auto; 
  alt: '1st SFC(A) Unit Logo';
  float: right;
  margin-left: 32px;
  margin-bottom: 32px;
`;

const resources = [
  {
    name: 'Green Beret Foundation',
    location: 'Location Template',
    image: gbLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://greenberetfoundation.org/',
    facebook: 'https://www.facebook.com/GreenBeretFoundation/',
    twitter: 'twitter link',
  },
  {
    name: 'Special Operations Warrior Foundation',
    location: 'Location Template',
    image: sowfLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://specialops.org/',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Wounded Warrior Project',
    location: 'Location Template',
    image: wwpLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://www.woundedwarriorproject.org/',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Military Special Operations Family Collaborative',
    location: 'Location Template',
    image: msofcLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://msofc.org/',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company C',
    location: 'Location Template',
    image: '../../images/resourceLogos/sowf-logo.png',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company D',
    location: 'Location Template',
    image: '../../images/resourceLogos/sowf-logo.png',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company E',
    location: 'Location Template',
    image: '../../images/resourceLogos/sowf-logo.png',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company F',
    location: 'Location Template',
    image: '../../images/resourceLogos/sowf-logo.png',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
];