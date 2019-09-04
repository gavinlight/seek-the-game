import styled, { css } from 'styled-components';
import PT from 'prop-types';

import { media } from 'styles/utils';

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.white};
  padding: 60px 0;

  ${media.tablet`
    padding: 25px 0 10px;
  `}
`;

export const Column = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &:first-child {
    margin-bottom: 40px;
  }

  ${media.tablet`
    width: 50%;

    &:first-child {
      margin-bottom: 0;
      margin-right: 80px;
    }

    ${(props) => props.big && css`
      flex: 66.6%;
    `}
  `}
`;

Column.propTypes = {
  big: PT.bool,
};

export const Heading = styled.h3`
  font-size: 2.2em;
  font-weight: 600;
  margin: 0 0 20px;
  padding-bottom: 6px;
  border-bottom: 4px solid ${(props) => props.theme.colors.white};
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 10px;
`;

export const Icon = styled.img`
  width: 25px;
  margin-right: 6px;

  ${media.mobile`
    width: 50px;
    margin-right: 14px;
  `}
`;

export const Url = styled.a`
  display: inline-block;
  font-size: 1.4em;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
`;
