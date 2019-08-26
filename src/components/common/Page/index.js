import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Footer from 'common/Footer';

const StyledPage = styled.div`
  font-family: ${(props) => props.theme.fonts.sourcesans};
`;

const Page = ({ children }) => (
  <StyledPage>
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
