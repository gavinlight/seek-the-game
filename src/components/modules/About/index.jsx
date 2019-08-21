import React from 'react';

import data from 'services/appData';
import Container from 'common/Container';

import { AboutContainer, QuoteContainer, TextContainer, Heading, Text } from './styled';

const About = () => (
  <AboutContainer>
    <QuoteContainer>
      <Container variant="small">
        <Text>"{data.about_quote}"</Text>
      </Container>
    </QuoteContainer>
    <TextContainer>
      <Container variant="small">
        <Heading>{data.about_title}</Heading>
        <Text>{data.about_text}</Text>
      </Container>
    </TextContainer>
  </AboutContainer>
);

export default About;
