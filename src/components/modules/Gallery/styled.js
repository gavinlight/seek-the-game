import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';

import { media } from 'styles/utils';

export const GalleryContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.white};
  padding: 100px 0;
`;

export const MediaContainer = styled(TransitionGroup)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  & .media-enter {
    opacity: 0;
  }

  & .media-enter-active {
    opacity: 1;
    transition: all 500ms ease-in;
  }

  & .media-exit {
    opacity: 1;
  }

  & .media-exit-active {
    opacity: 0;
    transition: all 500ms ease-in;
  }
`;

export const Categories = styled.div`
  display: flex;
  margin: 0 auto 40px;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
  `}
`;
