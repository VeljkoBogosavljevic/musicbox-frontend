import React from 'react';
import { Table } from 'react-bootstrap';

function TracksTable (props) {

    return (
        <Table striped variant="dark" size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Track Name</th>
                    <th>Artists</th>
                </tr>
            </thead>
            <tbody>
                {props.tracks.map(track => {
                    return <tr key={track.id}>
                            <td>{track.track_number}</td>
                            <td>{track.name}</td>
                            <td>{track.artists.map(artist => artist.name).join(', ')}</td>
                        </tr>
                })}
            </tbody>
        </Table>
    );

};

export default TracksTable;