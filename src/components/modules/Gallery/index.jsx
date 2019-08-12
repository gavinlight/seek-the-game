import React from 'react';

import data from 'services/appData';
import Container from 'common/Container';

import mapper from './mapper';
import { GalleryContainer, MediaContainer, Heading, Categories, Category } from './styled';

const Gallery = () => {
  const [category, setCategory] = React.useState('*');
  const onSetCategory = (category) => () => setCategory(category);
  const mediaIsActive = (type) => category === '*' || type === category;

  return (
    <GalleryContainer>
      <Container>
        <Heading>Some of seek's media</Heading>
        <Categories>
          <Category onClick={onSetCategory('*')}>All</Category>
          <Category onClick={onSetCategory('image')}>Images</Category>
          <Category onClick={onSetCategory('video')}>Video</Category>
          <Category onClick={onSetCategory('audio')}>Audio</Category>
        </Categories>
        <MediaContainer>
          {data.gallery.map((media) => {
            const { url, type } = media;
            const MediaComponent = mapper(type);

            return <MediaComponent key={url} url={url} active={mediaIsActive(type)} />;
          })}
        </MediaContainer>
      </Container>
    </GalleryContainer>
  );
};

export default Gallery;
