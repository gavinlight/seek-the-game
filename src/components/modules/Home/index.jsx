import React from 'react';

import Page from 'common/Page';
import Intro from 'modules/Intro';
import Demo from 'modules/Demo';
import About from 'modules/About';
import Gallery from 'modules/Gallery';
import Story from 'modules/Story';

const Home = () => (
  <Page>
    <Intro />
    <Demo />
    <About />
    <Gallery />
    <Story />
  </Page>
);

export default Home;
