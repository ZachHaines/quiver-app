import styled from 'styled-components';
import ResourceCards from '../ResourceCards';
/* MUI Imports */
import { Typography } from '@mui/material';
import { generalResources } from '../../sampleData';


const GeneralResources = () => {
  return (
    <StyledBackground>
      <StyledHeader variant='h2'>
        Family Programs General Resources
      </StyledHeader>
      {ResourceCards(generalResources)}
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