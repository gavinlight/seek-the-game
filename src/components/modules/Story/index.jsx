import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import Container from 'common/Container';

import { StoryContainer, Heading, Paragraph } from './styled';

const Story = () => (
  <StoryContainer>
    <Container>
      <Heading>Prologue, a strange awakening</Heading>
      {data.story_paragraphs.map((paragraph) => {
        const props = { [paragraph.type]: true };
        return <Paragraph {...props} dangerouslySetInnerHTML={{ __html: sanitize(paragraph.content) }} />;
      })}
    </Container>
  </StoryContainer>
);

export default Story;
