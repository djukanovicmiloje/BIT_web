import React from 'react';
import Post from './Post';

const dogs = new Array(1000).fill(0);

const Content = () => (
    <div id="content">
        {dogs.map(() => <Post />)}
    </div>
)
export default Content