import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import Container from 'common/Container';
import Heading from 'common/Heading';

import { StudioContainer, Text, Logo } from './styled';

const Studio = () => (
  <StudioContainer id="studio">
    <Container variant="tiny">
      <Heading>{data.studio_title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: sanitize(data.studio_content) }} />
      <Logo src={data.studio_image} alt="Game Studio Logo" />
    </Container>
  </StudioContainer>
);

export default Studio;
