import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onSelectVideo}) => {
    return (
        <div onClick={() => onSelectVideo(video)} className='video-item item'>
            <img alt={video.snippet.title} className='ui avatar image' src={video.snippet.thumbnails.high.url}></img>
            <div className='content'>
                <div className='header'>
                    <a>{video.snippet.title}</a>
                </div>
            </div>
        </div>

    )
}

export default VideoItem;