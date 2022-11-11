import React, {useState, useEffect } from 'react';
import SearchBar from './SearchBar';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideo from '../hooks/useVideo';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideo('buildings');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    }, [videos]);

    const onSelectVideo = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className='ui container'>
            <SearchBar onSubmit = {search} />
            <div className='ui grid'>
                <div className='ten wide column'>
                    <VideoDetail video = {selectedVideo} />
                </div>
                <div className='six wide column'>
                    <VideoList onSelectVideo = {onSelectVideo} videos={videos}/>
                </div>
            </div>
        </div>
    )

}


export default App;