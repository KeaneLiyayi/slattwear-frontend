import React, { useEffect, useRef } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import 'embla-carousel/dist/embla-carousel.css'; // Adjust the path as per the location of your CSS file

const Embla = ({ children }) => {
    const carouselRef = useRef(null);
    const [embla] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        if (embla) {
            // Embla carousel instance is ready
        }
    }, [embla]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={carouselRef}>
                <div className="embla__container">
                    {React.Children.map(children, (child, index) => (
                        <div className="embla__slide" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <button className="embla__prev" onClick={() => embla.scrollPrev()}>&#10094;</button>
            <button className="embla__next" onClick={() => embla.scrollNext()}>&#10095;</button>
        </div>
    );
};

export default Embla;
