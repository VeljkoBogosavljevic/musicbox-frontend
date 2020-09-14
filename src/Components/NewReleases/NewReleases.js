import React, {useState, useEffect} from 'react';
import apiEndpoints from '../../Constants/apiEndpoints';
import axios from 'axios';
import logo from '../../Styles/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Media } from 'react-bootstrap';


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
            <header className="App-header">
            <h1 style={{marginBottom: '20px'}}>New releases</h1>
             {!isLoaded ? <img src={logo} className="App-logo" alt="logo" /> :
                    error ? <h6>Ooops, error while fetching new releases</h6> :
                    <ul className="list-unstyled">
                        {items.map(album => {
                            return <Media as="li" key={album.id}>
                                 <img 
                                    width={album.images[2].width}
                                    height={album.images[2].height}
                                    className="mr-3"
                                    src={album.images[2].url}
                                    alt = {album.id}
                                />
                                <Media.Body>
                                     <h5>{album.name}</h5>
                                    <p>
                                        Total tracks: {album.total_tracks}
                                    </p>
                                </Media.Body>
                            </Media>
                        })}
                    </ul>
                }
            </header>
        </div>
      );
};

export default NewReleases;