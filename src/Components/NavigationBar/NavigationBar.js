import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../Styles/logo.svg';

function NavigationBar (props) {

    return (
        <Navbar bg="dark">
            <Nav className="mr-auto">
                <Navbar.Brand key="home" href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Spotify logo"
                    />
                </Navbar.Brand>
            </Nav>
            <Nav>
                {props.recentlyViewed.length > 0 && <Navbar.Brand className="App-recently-viewed-text">Recently viewed: </Navbar.Brand>}
                {props.recentlyViewed.map(recentlyViewedAlbum => {
                    return <Navbar.Brand key={recentlyViewedAlbum.id}>
                        <img
                            src={recentlyViewedAlbum.images[2].url}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt={recentlyViewedAlbum.id}
                        />
                    </Navbar.Brand>
                })}
            </Nav>
        </Navbar>
    );

};

export default NavigationBar;