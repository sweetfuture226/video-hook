import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectVideo}) => {
    const renderedList = videos.map(video => {
        return <div className='ui list' key={video.id.videoId}><VideoItem onSelectVideo={onSelectVideo} video = {video}/></div>
    }) 
    return <div>{renderedList}</div>
}

export default VideoList;