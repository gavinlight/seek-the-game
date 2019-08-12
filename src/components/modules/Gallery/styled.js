import styled from 'styled-components';
import { media } from 'styles/utils';

export const GalleryContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.white};
  padding: 100px 0;
`;

export const MediaContainer = styled.div`
`;

export const Heading = styled.h2`
  font-size: 3em;
  font-family: ${(props) => props.theme.fonts.rosemary};
  font-weight: 300;
  margin-top: 0;
  text-align: center;

  &:after {
    content: "";
    height: 5px;
    width: 75px;
    display: block;
    margin: 20px auto 40px;
    background-color: ${(props) => props.theme.colors.red};
  }
`;

export const Categories = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
  `}
`;
