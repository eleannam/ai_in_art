import React from 'react';
import ReactPlayer from 'react-player';
import Rating from './Rating';
import useToken from './useToken';

function VideoPlayer({ inputFile }) {
    const { token, setToken } = useToken();

    return (
        <div className='video-div'>
            <label> Input file: {inputFile}</label>
            <ReactPlayer
                url='Videos/output.mp4'
                width="640px"
                height="360px"
                controls={true} />

            {token && (
                <div>
                    <Rating type='quality' />
                    <Rating type='relevance' />
                </div>)}
        </div>
    );
}

export default VideoPlayer;
