import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Header from 'common/Header';
import Footer from 'common/Footer';

const StyledPage = styled.div`
  font-family: ${(props) => props.theme.fonts.sourcesans};
`;

const Page = ({ children }) => (
  <StyledPage>
    <Header />
    {children}
    <Footer />
  </StyledPage>
);

Page.propTypes = {
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default Page;
