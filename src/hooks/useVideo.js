import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideo = ({defaultTerm}) => {
    const [videos, setVideos] = useState([]);
    const search = async inputValue => {
        const response = await youtube.get('/search' , {
            params: {
                q: inputValue
            }
        });

        setVideos(response.data.items);
        
        
    };

    useEffect(() => {
        search(defaultTerm);
    }, []);

    return [videos, search];
}

export default useVideo;