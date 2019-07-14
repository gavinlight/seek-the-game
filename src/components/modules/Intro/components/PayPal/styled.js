import styled from 'styled-components';

export const PayPalContainer = styled.div`
  margin-top: 60px;

  & input[type="image"] {
    margin-top: 8px;
  }
`;

export const PayPalText = styled.p`
  margin: 0 0 4px;
  color: ${(props) => props.theme.colors.white};
`;
