import styled from 'styled-components';
import { ResourceCard } from '../types';
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';

const ResourceCards = (resources: ResourceCard[]) => {
  return (
    <Grid
      container
      spacing={4}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      {resources.map((el, i) => {
        return (
          <Grid item key={i}>
            <Card raised={true}
              sx={{
                width: '320px',
                height: '400px',
                backgroundColor: 'white',
                borderRadius: '24px',
                marginBottom: '24px'
              }}
            >
              <CardContent>
                <img src={el.image} height='64px' width='auto' />
                <StyledCardHeader variant='h5'>
                  {el.name}
                </StyledCardHeader>
                <Grid container direction='row' alignItems='center'>
                  <PhoneIcon sx={{ padding: '0 8px 8px 0' }} />
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
  )
};

export default ResourceCards;

const StyledCardHeader = styled(Typography)`
  color: #024407;  
  text-align: center;
  padding-bottom: 16px;
`;