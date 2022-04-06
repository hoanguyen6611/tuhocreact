import React from 'react';
import { youtubedata } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = () => {
    return (
        <div className="youtube-list">
            {youtubedata.map((item, index) => (
                <YoutubeItem
                    key={item.id}
                    image={item.image}
                    avatar={item.avatar}
                    title={item.title}
                    author={item.author} />
            ))}
        </div>
    );
};

export default YoutubeList;