import React from 'react';

import data from 'services/appData';
import Container from 'common/Container';
import Heading from 'common/Heading';

import { AboutContainer, QuoteContainer, TextContainer, Text } from './styled';

const About = () => (
  <AboutContainer id="about">
    <QuoteContainer>
      <Container variant="small">
        <Text>"{data.about_quote}"</Text>
      </Container>
    </QuoteContainer>
    <TextContainer>
      <Container variant="small">
        <Heading variant="grey">{data.about_title}</Heading>
        <Text>{data.about_text}</Text>
      </Container>
    </TextContainer>
  </AboutContainer>
);

export default About;
