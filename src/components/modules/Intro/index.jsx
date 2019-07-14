import React from 'react';

import data from 'services/appData';

import Container from 'common/Container';
import Button from 'common/Button';

import { IntroContainer, Heading, SeeMore, PayPal, PayPalText } from './styled';

const Intro = () => (
  <IntroContainer>
    <Container>
      <Heading dangerouslySetInnerHTML={{ __html: data.intro_text }} />
      <Button href={data.demo} target="_blank" as="a">
        Play our demo
      </Button>
      <PayPal>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <PayPalText>Want to support us?</PayPalText>
          <PayPalText>You can donate to our paypal here</PayPalText>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={data.paypal_id} />
          <input type="image" src="https://www.paypalobjects.com/en_US/NL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </PayPal>
    </Container>
    <SeeMore>See more</SeeMore>
  </IntroContainer>
);

export default Intro;
