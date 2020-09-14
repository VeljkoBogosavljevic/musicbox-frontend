import React, { Component } from 'react';
import logo from '../../Styles/logo.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import markets from '../../Constants/markets';

class Welcome extends Component {

    constructor(props) {
        console.log('Welcome to Music Box application ');
        super(props);
        this.state = {
            selectedMarket: markets[1].code
        };
    }

    hrefBuilder (selectedMarket) {
        return `/new-releases/${selectedMarket}`;
    }

    render () {
        const onSelect = (selectedMarket) => {
            console.log('Selected market: ', selectedMarket);
            this.setState({
              selectedMarket: selectedMarket
            });
        }

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Music Box</h1>
                    <h6>Powered by spotify</h6>
                    <img src={logo} className="App-logo" alt="logo" />
                    <DropdownButton key="market-dropdown" id="dropdown-variants-success" variant="success" title="Select market" >
                        {markets.map(market => <Dropdown.Item 
                                                key={market.code} 
                                                eventKey={market.code} 
                                                onSelect={onSelect} 
                                                active = {market.code === this.state.selectedMarket}
                                                href={this.hrefBuilder(this.state.selectedMarket)}>
                                                    {market.name}
                                                </Dropdown.Item>)}
                    </DropdownButton>
                </header>
            </div>
          );
    }


}

export default Welcome;