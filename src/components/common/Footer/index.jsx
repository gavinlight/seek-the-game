import React from 'react';

import data from 'services/appData';
import Container from 'common/Container';

import { FooterContainer, Column, Heading, Links, Link, Icon, Url } from './styled';

const Footer = () => (
  <FooterContainer id="contact">
    <Container variant="small" column>
      <Column big>
        <Heading>Find us at</Heading>
        <Links>
          {data.social.links.map((link, i) => (
            <Link key={i}>
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
        <Url
          href={`mailto:${data.social.email}`}
          alt={data.social.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.social.email}
        </Url>
      </Column>
    </Container>
  </FooterContainer>
);

export default Footer;
