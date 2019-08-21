import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import Container from 'common/Container';

import { StudioContainer, Heading, Text, Logo, Url } from './styled';

const Studio = () => (
  <StudioContainer>
    <Container variant="tiny">
      <Heading>{data.studio_title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: sanitize(data.studio_content) }} />
      <a href={data.studio_url} target="_blank" rel="noopener noreferrer">
        <Logo src={data.studio_image} alt="Game Studio Logo" />
      </a>
      <Url href={data.studio_url} target="_blank" rel="noopener noreferrer">
        {data.studio_url}
      </Url>
    </Container>
  </StudioContainer>
);

export default Studio;
