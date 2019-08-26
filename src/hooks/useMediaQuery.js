import React from 'react';
import _ from 'lodash';

export default (queries = {}, debounce = 500) => {
  const mediaQueries = Object.values(queries).map((query) =>
    window.matchMedia(query)
  );
  const matchMediaQueries = () =>
    Object.keys(queries).reduce((obj, val, index) => {
      obj[val] = mediaQueries[index].matches;
      return obj;
    }, {});

  const [media, setMedia] = React.useState(matchMediaQueries());

  const resizeDebounce = React.useRef(debounce);
  React.useEffect(() => {
    const updateMedia = () => setMedia(matchMediaQueries());
    const resizeListener = _.debounce(updateMedia, resizeDebounce.current);

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = Object.keys(media)
    .reverse()
    .find((size) => media[size]);
  return [active, media];
};
