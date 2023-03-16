import styled from 'styled-components';
import ResourceCards from '../ResourceCards';
import { Typography } from '@mui/material';
import { generalResources } from '../../mockData';


const GeneralResources = () => {
  return (
    <section id='resources'>
      <StyledBackground>
        <StyledHeader variant='h2'>
          Family Programs General Resources
        </StyledHeader>
        {ResourceCards(generalResources)}
      </StyledBackground>
    </section>
  )
};

export default GeneralResources;

const StyledBackground = styled.div`
  background-color: #F3F3F3;
  padding: 48px;
`;

const StyledHeader = styled(Typography)`
  color: #024407;
  padding: 32px;
`;