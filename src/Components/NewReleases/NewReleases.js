import React, {useState, useEffect} from 'react';
import apiEndpoints from '../../Constants/apiEndpoints';
import axios from 'axios';
import logo from '../../Styles/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import NewReleasesCarousel from './NewReleasesCarousel';


function NewReleases () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const {selectedMarket} = useParams();

    useEffect(() => {
        axios.get(apiEndpoints.basePath + apiEndpoints.releases, {headers: {'Accept': 'application/json'}, params: {market: selectedMarket}})
            .then(response => {
                console.log('New releases response: ', response);
                setIsLoaded(true);
                setItems(response.data.albums.items);
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
             {!isLoaded ? <img src={logo} className="App-logo" alt="logo" /> :
                    error ? <h6>Ooops, error while fetching new releases</h6> :
                        <p>Top {items.length} albums</p>
                }
            </header>
            <div className="App-body">
                {items.length > 0 && <NewReleasesCarousel albums = {items}></NewReleasesCarousel>}
            </div>
        </div>
      );
};

export default NewReleases;