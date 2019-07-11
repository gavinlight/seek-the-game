import React from 'react';

import data from 'services/appData';

import Page from 'common/Page';
import Container from 'common/Container';
import Button from 'common/Button';

import { IntroContainer, Heading } from './styled';

const Home = () => (
  <Page>
    <IntroContainer>
      <Container>
        <Heading>
          Seek is an atmospheric and terrifying game.
          <br />Be prepared
        </Heading>
        <Button href={data.demo} target="_blank" as="a">
          Play our demo
        </Button>
      </Container>
    </IntroContainer>
  </Page>
);

export default Home;
