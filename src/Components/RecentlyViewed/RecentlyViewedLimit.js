import React from 'react';
import util from '../../Utils/util';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';

function RecentlyViewedLimit (props) {

    const recentlyViewedLimitRange = util.range(3,10);

    const onSelect = (limit) => {
        props.updateRecentlyViewedLimit(limit);
    }

    return (
        <DropdownButton key="recentlyViewedLimit-dropdown" id="dropdown-variants-success" variant="success" title="Set recently viewed limit" >
        {recentlyViewedLimitRange.map(option => <Dropdown.Item 
                                key={option} 
                                eventKey={option} 
                                onSelect={onSelect} 
                                active = {option === parseInt(props.recentlyViewedLimit)}>
                                    {option}
                                </Dropdown.Item>)}
        </DropdownButton>
    );

};

export default RecentlyViewedLimit;