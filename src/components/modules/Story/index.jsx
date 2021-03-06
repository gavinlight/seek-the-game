import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import Container from 'common/Container';
import Heading from 'common/Heading';

import { StoryContainer, Paragraph } from './styled';

const Story = () => (
  <StoryContainer id="story">
    <Container variant="small">
      <Heading variant="grey">{data.story_title}</Heading>
      {data.story_paragraphs.map((paragraph, i) => {
        const props = { [paragraph.type]: true };
        return (
          <Paragraph
            key={i}
            {...props}
            dangerouslySetInnerHTML={{
              __html: sanitize(paragraph.content),
            }}
          />
        );
      })}
    </Container>
  </StoryContainer>
);

export default Story;
