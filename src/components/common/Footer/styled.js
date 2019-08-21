import styled, { css } from 'styled-components';
import PT from 'prop-types';

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.white};
  padding: 25px 0 10px;
`;

export const Column = styled.div`
  width: 50%;

  &:first-child {
    margin-right: 100px;
  }

  ${(props) => props.big && css`
    flex: 66.6%;
  `}
`;

Column.propTypes = {
  big: PT.bool,
};

export const Heading = styled.h3`
  font-size: 2.2em;
  font-weight: 600;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 4px solid ${(props) => props.theme.colors.white};
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled.div`
  width: 50%;
  margin-bottom: 20px;
`;

export const Icon = styled.img`

`;

export const Url = styled.a`
  display: inline-block;
  font-size: 1.4em;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
`;
