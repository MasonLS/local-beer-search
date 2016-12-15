import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Brewery = ({
    info
}) => (
    <ListGroupItem header={info.name}>
    </ListGroupItem>
);

export default Brewery;