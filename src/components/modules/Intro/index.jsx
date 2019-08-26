import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import ArrowDownImage from 'images/arrow-down.png';

import Container from 'common/Container';
import Button from 'common/Button';

import PayPal from './components/PayPal';
import { IntroContainer, Heading, SeeMore } from './styled';

const Intro = () => (
  <IntroContainer id="intro">
    <Container>
      <Heading dangerouslySetInnerHTML={{ __html: sanitize(data.intro_text) }} />
      <Button
        href={data.demo}
        target="_blank"
        rel="noopener noreferrer"
        as="a"
        uppercase={false}
      >
        Play our demo
      </Button>
      <PayPal />
    </Container>
    <SeeMore>
      See more
      <img src={ArrowDownImage} alt="Arrow down" />
    </SeeMore>
  </IntroContainer>
);

export default Intro;
