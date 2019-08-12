import styled from 'styled-components';

import { media, sizes } from 'styles/utils';

export default styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 28px;

  ${media.tablet`
    padding: 0;
    max-width: ${sizes.tablet}px;
  `}

  ${media.desktop`
    max-width: ${sizes.desktop - 50}px;
  `}

  ${media.large`
    max-width: ${sizes.large - 50}px;
  `}
`;
