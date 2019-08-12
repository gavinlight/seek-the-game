import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import Button from 'common/Button';
import Container from 'common/Container';

import { DemoContainer, Video, Content, Heading, Text } from './styled';

const Demo = () => (
  <DemoContainer>
    <Container variant="small">
      <Video src={data.video} />
      <Content>
        <Heading>CHECK OUT OUR DEMO!</Heading>
        <Text dangerouslySetInnerHTML={{ __html: sanitize(data.demo_text) }} />
        <Button href={data.demo} color="grey" as="a" target="_blanl">
          SEE THE PLAYABLE DEMO
        </Button>
      </Content>
    </Container>
  </DemoContainer>
);

export default Demo;
