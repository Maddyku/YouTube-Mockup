import React from 'react';
import VideoItem from './VideoItem';

//Functional Component
//Destructure out videos and onVideoSelect callback
const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(video => {
//Store Videos Map in renderedList variable
// Return VideoItem Component from Videos Map using video as prop 
        return <VideoItem 
                key = {video.id.videoId}
                onVideoSelect = {onVideoSelect}
                video = {video} />
    })

    return <div className = "ui relaxed divided list">{renderedList}</div>
};

export default VideoList;