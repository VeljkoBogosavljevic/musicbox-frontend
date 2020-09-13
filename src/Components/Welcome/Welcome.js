import React, { Component } from 'react';
import logo from './styles/logo.svg';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import markets from '../../Constants/markets';

class Welcome extends Component {

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Music Box</h1>
                    <h6>Powered by spotify</h6>
                    <img src={logo} className="App-logo" alt="logo" />
                    <DropdownButton key="market-dropdown" id="dropdown-variants-success" variant="success" title="Select market" >
                        {markets.map(market => <Dropdown.Item key={market.code} eventKey={market.code} onSelect={this.props.onSelect} href="/new-releases">{market.name}</Dropdown.Item>)}
                    </DropdownButton>
                </header>
            </div>
          );
    }


}

export default Welcome;