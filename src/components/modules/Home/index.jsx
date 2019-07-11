import React from 'react';

import Page from 'common/Page';
import Container from 'common/Container';

import { IntroContainer, Heading } from './styled';

const Home = () => (
  <Page>
    <IntroContainer>
      <Container>
        <Heading>
          Seek is an atmospheric and terrifying game.
          <br />Be prepared
        </Heading>
      </Container>
    </IntroContainer>
  </Page>
);

export default Home;
