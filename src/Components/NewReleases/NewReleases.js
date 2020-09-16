import React, {useState, useEffect} from 'react';
import apiEndpoints from '../../Constants/apiEndpoints';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import NewReleasesCarousel from './NewReleasesCarousel';
import Tracks from '../Tracks/Tracks';
import { Spinner } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';


function NewReleases () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [activeAlbum, setActiveAlbum] = useState({});
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [recentlyViewedLimit, setRecentlyViewedLimit] = useState(6);
    // Reuse to set carousel active index when clicked on recently view item, 
    // but since Navbar is not working as I expected to work I gave up this feature
    const [carouselIndex, setCarouselIndex] = useState(0);

    const {selectedMarket} = useParams();

    useEffect(() => {
        axios.get(apiEndpoints.basePath + apiEndpoints.releases, {headers: {'Accept': 'application/json'}, params: {market: selectedMarket}})
            .then(response => {
                console.log('New releases response: ', response);
                setIsLoaded(true);
                setItems(response.data.albums.items);
                setActiveAlbum(response.data.albums.items[0]);
            })
            .catch(error => {
                console.warn('Error while fetching new releases', error);
                setIsLoaded(true);
                setError(error);
            });
      }, [selectedMarket]);

      const pushRecentlyViewed = (album, index) => {
        if (!recentlyViewed.some(recentlyViewAlbum => recentlyViewAlbum.id === album.id)) {
            let recentlyViewedCopy = recentlyViewed;
            if (recentlyViewed.length >= recentlyViewedLimit) {
                recentlyViewedCopy.shift();
            }
            album.index = index;
            recentlyViewedCopy = [...recentlyViewedCopy, album];
            setRecentlyViewed(recentlyViewedCopy);
        }
      };

      const updateRecentlyViewedLimit = (limit) => {
        setRecentlyViewedLimit(limit);
        if (limit < recentlyViewed.length) {
            let recentlyViewedCopy = recentlyViewed;
            recentlyViewedCopy = recentlyViewedCopy.slice(- limit);
            setRecentlyViewed(recentlyViewedCopy);
        }
      }

      return (
        <div className="App">
            <NavigationBar recentlyViewed={recentlyViewed} recentlyViewedLimit={recentlyViewedLimit} updateRecentlyViewedLimit={updateRecentlyViewedLimit}></NavigationBar>
            <header className="App-header App-header-new-releases">
            <h1 className="App-h1-new-releases">New releases</h1>
             {!isLoaded ? <Spinner animation="border" size="lg" /> :
                    error ? <h6>Ooops, error while fetching new releases</h6> :
                        <h6>Top {items.length} albums</h6>
                }
            </header>
            <div className="App-body">
                {items.length > 0 && <>
                                        <NewReleasesCarousel carouselIndex = {carouselIndex}
                                                             setCarouselIndex = {setCarouselIndex}
                                                             albums = {items} 
                                                             setActiveAlbum={setActiveAlbum} 
                                                             pushRecentlyViewed={pushRecentlyViewed}>
                                        </NewReleasesCarousel>
                                        <Tracks key={activeAlbum.id} activeAlbum={activeAlbum}></Tracks>
                                    </>}
            </div>
            <div className="App-footer">
                <i>by Veljko Bogosavljevic</i>
            </div>
        </div>
      );
};

export default NewReleases;