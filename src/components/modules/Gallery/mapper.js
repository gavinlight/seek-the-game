import { Image, Video, Audio } from './components';

export default (type) => {
  switch (type) {
  case 'image':
    return Image;
  case 'video':
    return Video;
  case 'audio':
    return Audio;
  default:
    return null;
  }
};
