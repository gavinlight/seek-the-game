import React from 'react';
import sanitize from 'sanitize-html';

import data from 'services/appData';
import Button from 'common/Button';
import Container from 'common/Container';

import { DemoContainer, Video, Content, Heading, Text } from './styled';

const Demo = () => (
  <DemoContainer id="demo">
    <Container variant="small">
      <Video src={data.video} />
      <Content>
        <Heading>{data.demo_title}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: sanitize(data.demo_text) }} />
        <Button href={data.demo} color="grey" as="a" target="_blank" rel="noopener noreferrer">
          {data.demo_button}
        </Button>
      </Content>
    </Container>
  </DemoContainer>
);

export default Demo;
