import React from 'react';
import { Navbar } from 'react-bootstrap';

function RecentlyViewed (props) {

    return (
            <div>
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
            </div>
    );

};

export default RecentlyViewed;