import React, {useState, useEffect} from 'react';
import apiEndpoints from '../../Constants/apiEndpoints';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import NewReleasesCarousel from './NewReleasesCarousel';
import Tracks from '../Tracks/Tracks';
import { Spinner } from 'react-bootstrap';


function NewReleases () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [activeAlbum, setActiveAlbum] = useState({});

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

      return (
        <div className="App">
            <header className="App-header App-header-new-releases">
            <h1 className="App-h1-new-releases">New releases</h1>
             {!isLoaded ? <Spinner animation="border" size="lg" /> :
                    error ? <h6>Ooops, error while fetching new releases</h6> :
                        <p>Top {items.length} albums</p>
                }
            </header>
            <div className="App-body">
                {items.length > 0 && <>
                                        <NewReleasesCarousel albums = {items} setActiveAlbum={setActiveAlbum}></NewReleasesCarousel>
                                        <Tracks key={activeAlbum.id} activeAlbum={activeAlbum}></Tracks>
                                    </>}
            </div>
            <div className="App-footer">
                <h8><i>by Veljko Bogosavljevic</i></h8>
            </div>
        </div>
      );
};

export default NewReleases;