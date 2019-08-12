import React from 'react';

import data from 'services/appData';
import Container from 'common/Container';

import mapper from './mapper';
import { Category } from './components';
import { GalleryContainer, MediaContainer, Heading, Categories } from './styled';

const categories = {
  '*': 'All',
  image: 'Image',
  video: 'Video',
  audio: 'Audio',
};

const Gallery = () => {
  const [category, setCategory] = React.useState('*');
  const mediaIsActive = (type) => category === '*' || type === category;

  return (
    <GalleryContainer>
      <Container>
        <Heading>Some of seek's media</Heading>
        <Categories>
          {Object.keys(categories).map((cat) => (
            <Category key={cat} category={cat} active={category} setCategory={setCategory}>
              {categories[cat]}
            </Category>
          ))}
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
