import React from 'react';

import Container from 'common/Container';

import { Column, Heading, Links, Link, Icon, Url } from './styled';

const linkies = [
  {
    text: 'Facebook',
    url: 'https://www.facebook.com',
    logo: '',
  },
  {
    text: 'Twitter',
    url: 'https://www.facebook.com',
    logo: '',
  },
  {
    text: 'GameJolt',
    url: 'https://www.facebook.com',
    logo: '',
  },
];

const Footer = () => (
  <Container>
    <Column big>
      <Heading>Find us at</Heading>
      <Links>
        {linkies.map((link) => (
          <Link>
            <Icon src={link.logo} />
            <Url href={link.url} alt={link.text} target="_blank" rel="noopener noreferrer">
              {link.text}
            </Url>
          </Link>
        ))}
      </Links>
    </Column>
    <Column>
      <Heading>Ask us anything!</Heading>
      <Url href={linkies[0].url} alt={linkies[0].text} target="_blank" rel="noopener noreferrer">
        {linkies[0].text}
      </Url>
    </Column>
  </Container>
);

export default Footer;
