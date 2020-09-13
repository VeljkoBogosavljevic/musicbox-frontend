import React, { Component } from 'react';
import apiEndpoints from '../../Constants/apiEndpoints';
import axios from 'axios';
import logo from '../../Styles/logo.svg';
import { Col, Container, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class NewReleases extends Component {

    constructor(props) {
        console.log('New releases for market: ', props.selectedMarket);
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    componentDidMount() {
        axios.get(apiEndpoints.basePath + apiEndpoints.releases, {headers: {'Accept': 'application/json'}, params: {market: this.props.selectedMarket}})
            .then(response => {
                console.log('Response: ', response);
                this.setState({
                    error: null,
                    isLoaded: true,
                    items: response.data.albums.items
                });
            })
            .catch(error => {
                console.warn('Error while fetching new releases', error);
                this.setState({
                    error: error,
                    isLoaded: true,
                    items: []
                });
            })
    }

    render () {
        const { error, isLoaded, items } = this.state;
        return (
            <div className="App">
              <header className="App-header">
                <h1>New releases</h1>
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
    }


}

export default NewReleases;