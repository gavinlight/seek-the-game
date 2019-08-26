import React from 'react';
import _ from 'lodash';

import { getScrollTop, getScrollBottom, getScrollPercentage } from 'services/scrollHelpers';

export default (throttle = 100) => {
  const scrollThrottle = React.useRef(throttle);
  const [scroll, setScroll] = React.useState({
    hasScrolled: false,
    top: 0,
    bottom: 0,
    percentage: 0,
  });

  React.useEffect(() => {
    scrollThrottle.current = throttle;
  }, [throttle]);

  React.useEffect(() => {
    const updateScroll = () => {
      setScroll({
        hasScrolled: true,
        top: getScrollTop(),
        bottom: getScrollBottom(),
        percentage: getScrollPercentage(),
      });
    };
    const scrollListener = _.throttle(updateScroll, scrollThrottle.current);

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return scroll;
};
