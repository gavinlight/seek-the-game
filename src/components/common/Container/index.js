import styled, { css } from 'styled-components';
import PT from 'prop-types';

import { media, sizes } from 'styles/utils';

const Container = styled.div`
  width: 100%;
  position: relative;
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

  ${(props) => props.variant === 'small' && css`
    width: ${sizes.desktop - 50}px;
    max-width: 100%;
  `}
`;

Container.propTypes = {
  variant: PT.string,
};

export default Container;
