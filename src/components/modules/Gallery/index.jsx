import React from 'react';
import { CSSTransition } from 'react-transition-group';

import data from 'services/appData';
import Container from 'common/Container';
import Heading from 'common/Heading';

import mapper from './mapper';
import { Category } from './components';
import { GalleryContainer, MediaContainer, Categories } from './styled';

const categories = {
  '*': 'All',
  image: 'Images',
  video: 'Video',
  audio: 'Audio',
};

const Gallery = () => {
  const [category, setCategory] = React.useState('*');
  const mediaIsActive = (type) => category === '*' || type === category;

  return (
    <GalleryContainer id="gallery">
      <Container>
        <Heading variant="red">{data.gallery_title}</Heading>
        <Categories>
          {Object.keys(categories).map((cat) => (
            <Category key={cat} category={cat} active={category} setCategory={setCategory}>
              {categories[cat]}
            </Category>
          ))}
        </Categories>
        <MediaContainer>
          {data.gallery.map((media) => {
            const { url, type, ...mediaProps } = media;
            const MediaComponent = mapper(type);

            return mediaIsActive(type) && (
              <CSSTransition key={url} timeout={500} classNames="media">
                <MediaComponent url={url} {...mediaProps} />
              </CSSTransition>
            );
          })}
        </MediaContainer>
      </Container>
    </GalleryContainer>
  );
};

export default Gallery;
