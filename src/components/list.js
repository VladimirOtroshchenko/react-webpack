import React from 'react';
import ListItem from './list-item';

const fruitsArray = ['apple', 'orange', 'banana', 'grapefruit'];

export const List = () => (
    <ul>
        {fruitsArray.map((fruit, idx) => (
            <ListItem fruit={fruit} />
        ))}
    </ul>
);
