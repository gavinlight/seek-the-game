import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import Container from 'common/Container';
import Heading from 'common/Heading';
import Logo from 'common/Logo';

import { StudioContainer, Text, LogoContainer } from './styled';

const Studio = () => (
  <StudioContainer id="studio">
    <Container variant="tiny">
      <Heading>{data.studio_title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: sanitize(data.studio_content) }} />
      <LogoContainer>
        <Logo size={150} inverted />
      </LogoContainer>
    </Container>
  </StudioContainer>
);

export default Studio;
