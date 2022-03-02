import React from 'react';
import { useState } from 'react';

function Rating({ type }) {
    const [thumbsUpImg, setThumbsUpImg] = useState('/images/thumbs_up_unclicked.png');
    const [thumbsUpState, setThumbsUpState] = useState(false);
    const [thumbsDownImg, setThumbsDownImg] = useState('/images/thumbs_down_unclicked.png');
    const [thumbsDownState, setThumbsDownState] = useState(false);

    const handleThumbsUpClick = (e) => {
        if (!thumbsUpState) {
            setThumbsUpImg('/images/thumbs_up_clicked.png');
            setThumbsDownImg('/images/thumbs_down_disabled.png');
            setThumbsUpState(true);
        } else {
            setThumbsUpImg('/images/thumbs_up_unclicked.png');
            setThumbsDownImg('/images/thumbs_down_unclicked.png');
            setThumbsUpState(false);
        }
        setThumbsDownState(false);
    }

    const handleThumbsDownClick = (e) => {
        if (!thumbsDownState) {
            setThumbsDownImg('/images/thumbs_down_clicked.png');
            setThumbsUpImg('/images/thumbs_up_disabled.png');
            setThumbsDownState(true);
        } else {
            setThumbsDownImg('/images/thumbs_down_unclicked.png');
            setThumbsUpImg('/images/thumbs_up_unclicked.png');
            setThumbsDownState(false);
        }
        setThumbsUpState(false);
    }

    return (
        <div className='rating'>
            {type === 'quality' ?
                (<h>Quality Rating</h>) :
                (<h>Relevance Rating</h>)}

            <img src={thumbsUpImg} onClick={handleThumbsUpClick} />
            <img src={thumbsDownImg} onClick={handleThumbsDownClick} />
        </div>
    );
}

export default Rating;
