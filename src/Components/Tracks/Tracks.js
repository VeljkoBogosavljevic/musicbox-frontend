import React, {useState} from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiEndpoints from '../../Constants/apiEndpoints';
import TracksTable from './TracksTable';

function Tracks (props) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [tracks, setTracks] = useState([]);

    const {selectedMarket} = useParams();

    const handleClick = () => {
        console.log('Loading tracks for album: ', props.activeAlbum.name);

        setError(null);
        setTracks([]);
        setIsLoading(true);

        axios.get(apiEndpoints.basePath + apiEndpoints.albums + '/' + props.activeAlbum.id + apiEndpoints.tracks, {headers: {'Accept': 'application/json'}, params: {market: selectedMarket}})
            .then(response => {
                console.log('Tracks response: ', response);
                setIsLoading(false);
                setTracks(response.data.items);
            })
            .catch(error => {
                console.warn('Error while fetching tracks', error);
                setIsLoading(false);
                setError(error);
            });
        
    }

    return (
        <div>
            <Button variant="success" onClick={!isLoading ? handleClick : null} disabled={isLoading}>
                {isLoading ? <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"></Spinner> : 'View tracks'}
            </Button>
            <div className="App-tracks">
                {error && <h6>Ooops, error while fetching tracks</h6>}
                {tracks.length > 0 && <TracksTable tracks={tracks}></TracksTable>}
            </div>
        </div>
    );

};

export default Tracks;