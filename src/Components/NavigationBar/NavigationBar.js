import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../Styles/logo.svg';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';
import RecentlyViewedLimit from '../RecentlyViewed/RecentlyViewedLimit';

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
                <RecentlyViewed key="recentlyViewed" recentlyViewed={props.recentlyViewed}></RecentlyViewed>
            </Nav>
            <Nav>
                <RecentlyViewedLimit key={props.recentlyViewedLimit} recentlyViewedLimit={props.recentlyViewedLimit} updateRecentlyViewedLimit = {props.updateRecentlyViewedLimit}></RecentlyViewedLimit>
            </Nav>
        </Navbar>
    );

};

export default NavigationBar;