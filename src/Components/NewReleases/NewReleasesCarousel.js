import React from 'react';
import { Carousel } from 'react-bootstrap';

function NewReleasesCarousel (props) {
    const handleSelect = (selectedIndex, e) => {
        props.setActiveAlbum(props.albums[selectedIndex]);
    };

    return (
        <Carousel className="App-carousel" interval={null} onSelect={handleSelect}>
            {props.albums.map (album => {
                return <Carousel.Item key={album.id}>
                    <img className="App-carousel-image"
                        src={album.images[1].url}
                        alt={album.id}
                    />
                    <Carousel.Caption key={album.id} className="App-carousel-caption">
                        <h3>{album.name}</h3>
                        <p className="App-paragraph">Artists: {album.artists.map(artist => artist.name).join(', ')}</p>
                        <p className="App-paragraph">Number of tracks: {album.total_tracks}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            })}
        </Carousel>

    );

};

export default NewReleasesCarousel;