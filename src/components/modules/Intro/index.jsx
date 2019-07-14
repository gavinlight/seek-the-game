import React from 'react';

import data from 'services/appData';

import Container from 'common/Container';
import Button from 'common/Button';

import PayPal from './components/PayPal';
import { IntroContainer, Heading, SeeMore } from './styled';

const Intro = () => (
  <IntroContainer>
    <Container>
      <Heading dangerouslySetInnerHTML={{ __html: data.intro_text }} />
      <Button href={data.demo} target="_blank" as="a">
        Play our demo
      </Button>
      <PayPal />
    </Container>
    <SeeMore>See more</SeeMore>
  </IntroContainer>
);

export default Intro;
