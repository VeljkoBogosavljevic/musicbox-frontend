import React from 'react';
import { Carousel } from 'react-bootstrap';

function NewReleasesCarousel (props) {
    
    const handleSelect = (selectedIndex, e) => {
        props.setCarouselIndex(selectedIndex);
        props.setActiveAlbum(props.albums[selectedIndex]);
        props.pushRecentlyViewed(props.albums[selectedIndex], selectedIndex);
    };

    return (
        <Carousel activeIndex={props.carouselIndex} className="App-carousel" interval={null} onSelect={handleSelect}>
            {props.albums.map (album => {
                return <Carousel.Item key={album.id}>
                    <img className="App-carousel-image"
                        src={album.images[1].url}
                        alt={album.id}
                    />
                    <Carousel.Caption key={album.id} className="App-carousel-caption">
                        <h3>{album.name}</h3>
                        <p className="App-paragraph">Artists: <i>{album.artists.map(artist => artist.name).join(', ')}</i></p>
                        <p className="App-paragraph">Album type: <i>{album.album_type}</i></p>
                        <p className="App-paragraph">Number of tracks: <i>{album.total_tracks}</i></p>
                    </Carousel.Caption>
                </Carousel.Item>
            })}
        </Carousel>

    );

};

export default NewReleasesCarousel;