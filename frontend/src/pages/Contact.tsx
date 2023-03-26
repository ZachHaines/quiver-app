import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, IconButton, CardContent, Grid, Paper } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import logo1SFC from '../images/unitLogos/1SFC-logo-new.png';
import logo5th from '../images/unitLogos/5th_logo.png';
import logo95th from '../images/unitLogos/95th_gems_pipehawk_logo.png';
import logoPsyop from '../images/unitLogos/psyop_logo_transparent.png';
import logo528th from '../images/unitLogos/528_Sentinel_HPW_Logo.png';
import InputField from '../components/InputField';
import { ChangeEvent } from '../types';
import { ContactEnum, ContactForm } from '../objects';
import { ValidateEmail } from '../helperFunctions';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [msg, setMsg] = useState('');
  const [emailValidty, setEmailValidity] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const nav = useNavigate();

  const handleEmail = (input: string) => {
    setEmail(input)
    setEmailValidity(ValidateEmail(input))
  };

  const handleChange = (fieldNum: number, e: ChangeEvent) => {
    const v = e.target.value;
    fieldNum === ContactEnum.First ? setFirstName(v) :
      fieldNum === ContactEnum.Last ? setLastName(v) :
        fieldNum === ContactEnum.Email ? handleEmail(v) :
          fieldNum === ContactEnum.Phone ? setPhone(v) :
            fieldNum === ContactEnum.Org ? setOrg(v) :
              fieldNum === ContactEnum.Msg ? setMsg(v) :
                console.warn('Invalid Field Number!');
  }

  const handleSubmit = () => {
    setWasSubmitted(true);
  };

  const submitMessage = `Thank you for your interest in 1st SFC(A)'s Social & Family Programs! We will be in touch with you soon. Feel free to return to the main page.`

  return (
    <StyledBackground>
      <Grid container justifyContent='center' alignItems='center'>
        <Paper
          elevation={3}
          sx={{
            width: '800px',
            height: '800px',
            backgroundColor: '#1F1F22',
            borderRadius: '24px',
            margin: '48px',
            // marginBottom: '150px'
          }}
        >
          <CardContent sx={{ float: 'Left' }}>
            <IconButton aria-label='exit' onClick={() => nav('/')}>
              <CancelIcon color='error' fontSize='large' />
            </IconButton>
          </CardContent>

          <CardContent sx={{ padding: '0 144px', textAlign: 'center' }}>
            <img
              src={logo1SFC} alt='unit insignia'
              height='124px' width='auto'
              text-align='center'
            />
          </CardContent>

          <StyledHeader>
            Contact Us!
          </StyledHeader>

          <Grid
            container
            direction='row'
            justifyContent='space-around'
            alignItems='flex-start'
          >
            <Grid item xs={2}>
              <AsideImg src={logo528th} alt='528th Logo' />
              <AsideImg src={logoPsyop} alt='Psyop Logo' />
            </Grid>
            <Grid item xs={8}>
              {wasSubmitted
                ? <StyledMessage>
                  {submitMessage}
                </StyledMessage>
                : <CardContent sx={{ padding: '0 16px', textAlign: 'Left' }}>
                  {ContactForm.map(el => {
                    return (
                      <InputField
                        required={true}
                        key={el.fieldNum}
                        label={el.label}
                        id={el.id}
                        error={(!emailValidty) &&
                          (el.fieldNum === ContactEnum.Email) &&
                          email !== ''}
                        multiline={el.multiline}
                        rows={el.rows}
                        onChange={
                          (e: ChangeEvent) => handleChange(el.fieldNum, e)
                        }
                      />
                    )
                  })}
                </CardContent>
              }
              <CardContent style={{ textAlign: 'center' }}>
                <Button
                  disabled={
                    firstName && lastName && emailValidty && org
                      ? false : true
                  }
                  variant='contained'
                  size='large'
                  color={wasSubmitted ? 'primary' : 'success'}
                  onClick={wasSubmitted ? () => nav('/') : handleSubmit}
                >
                  {wasSubmitted ? 'Return Home' : 'Submit'} 
                </Button>
              </CardContent>
            </Grid>
            <Grid item xs={2}>
              <AsideImg src={logo95th} alt='95thth Logo' />
              <AsideImg src={logo5th} alt='528th Logo' />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </StyledBackground>
  )
}

export default Contact;

const StyledBackground = styled.div`
  background-color: #242D34;
  padding-top: 0;
  height: 100vh;
`;

const StyledHeader = styled.h2`
  color: white;
  margin: 8px;
`;

const StyledMessage = styled.h3`
  color: white;
  margin: 8px;
`;

const AsideImg = styled.img`
  width: 96px;  
  height: auto; 
  text-align: center;
  display: block;
  margin: 24px;
`;

/* MUI Customizations */
/*
 .MuiOutlinedInput-notchedOutline {
   border-color: blue !important;
 }
 .MuiFilledInput-root {
   border-bottom: 1px solid #53af5b !important;
 }
 .MuiInput-root {
   border-bottom: 1px solid #53af5b !important;
 }
 */