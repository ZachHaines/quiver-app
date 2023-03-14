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
import { Link } from 'react-router-dom';


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
                  backgroundColor: '#F3F3F3',
                  borderRadius: '24px',
                  marginBottom: '32px'
                }}
              >
                <CardContent>

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
                    <EmailIcon sx={{ padding: '8px 8px 8px 0' }} />
                    <a href={el.email}>{el.email}</a>
                  </Grid>

                  <Grid container direction='row' alignItems='center'>
                    <FacebookIcon sx={{ padding: '8px 8px 8px 0' }} />
                    <a href={el.facebook}>{el.facebook} </a>
                  </Grid>

                  <Grid container direction='row' alignItems='center'>
                    <TwitterIcon sx={{ padding: '8px 8px 8px 0' }} />
                    <a href='https://www.google.com'>{el.twitter}</a>
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
  background-color: white;
  padding: 48px;
`;

const StyledHeader = styled(Typography)`
  color: #024407;
  padding-bottom: 32px;
`;

const StyledSubHeader = styled(Typography)`
  color: #024407;  
  text-align: center;
  padding-top: 40px;
  padding-bottom: 8px;
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
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Wounded Warrior Project', 
    location: 'Location Template',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company A', 
    location: 'Location Template',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company B', 
    location: 'Location Template',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company C', 
    location: 'Location Template',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company D', 
    location: 'Location Template',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company E', 
    location: 'Location Template',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Company F', 
    location: 'Location Template',
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
];