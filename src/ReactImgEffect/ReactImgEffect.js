import React from 'react';
import PropTypes from 'prop-types';
import imgs  from '../img.json';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';


const ReactImgEffect = () => {
    const MyImage = (image) => (
        <LazyLoadImage
          alt={image.alt}
          effect="blur"
          src={image.src}
        width={image.width}
        placeholderSrc={image.caption}
        />
      );

      const Gallery = ( images, { scrollPosition }) => (
        <div>
          {images.map((image) =>
            <LazyLoadImage
              alt={image.alt}
              effect="blur"
              delayTime={2000}
              scrollPosition={scrollPosition}
              src={image.src}
              width={image.width}
              // If the image we are creating here has the same src than before,
              // we can directly display it with no need to lazy-load.
              visibleByDefault={image.src === './img/1.jpg'} />
          )}
        </div>
      );

      return (
        <div>
            {MyImage(imgs[0])}

            {Gallery(imgs, trackWindowScroll)}
            

        </div>
    );
};

ReactImgEffect.propTypes = {};

export default ReactImgEffect;