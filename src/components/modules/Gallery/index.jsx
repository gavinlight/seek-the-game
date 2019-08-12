import React from 'react';

import data from 'services/appData';
import Container from 'common/Container';

import mapper from './mapper';
import { GalleryContainer, MediaContainer, Heading, Categories, Category } from './styled';

const Gallery = () => (
  <GalleryContainer>
    <Container>
      <Heading>Some of seek's media</Heading>
      <Categories>
        <Category>All</Category>
        <Category>Images</Category>
        <Category>Video</Category>
        <Category>Audio</Category>
      </Categories>
      <MediaContainer>
        {data.gallery.map((media) => {
          const MediaComponent = mapper(media.type);
          return <MediaComponent url={media.url} />;
        })}
      </MediaContainer>
    </Container>
  </GalleryContainer>
);

export default Gallery;
