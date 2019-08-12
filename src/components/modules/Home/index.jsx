import React from 'react';

import Page from 'common/Page';
import Intro from 'modules/Intro';
import Demo from 'modules/Demo';
import About from 'modules/About';

const Home = () => (
  <Page>
    <Intro />
    <Demo />
    <About />
  </Page>
);

export default Home;
