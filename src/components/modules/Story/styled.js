import styled, { css } from 'styled-components';
import PT from 'prop-types';

import { media } from 'styles/utils';

import StoryBackground from 'images/story-bg.png';

export const StoryContainer = styled.div`
  background-image: url(${StoryBackground});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.theme.colors.white};
  padding: 100px 0;
  border-bottom: 20px solid ${(props) => props.theme.colors.grey};
`;

export const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.5em;
  width: 100%;
  margin-bottom: 40px;

  &:first-letter {
    font-size: 1.5em;
    color: ${(props) => props.theme.colors.grey.light};
  }

  &:last-child {
    margin-bottom: 0;
  }

  & strong {
    display: block;
    margin-top: 25px;
  }

  ${media.tablet`
    font-size: 1.2em;
    line-height: 28px;
    margin-bottom: 100px;

    ${(props) => props.center && css`
      margin: 0 auto 100px;
      text-align: center;
    `}

    ${(props) => props.right && css`
      margin-left: auto;
      text-align: right;
    `}
  `}
`;

Paragraph.propTypes = {
  center: PT.bool,
  right: PT.bool,
};
