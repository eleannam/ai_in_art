import { useState } from 'react';

export default function useVideo() {
    const getVideo = () => {
        const videoString = sessionStorage.getItem('video');
        const userVideo = JSON.parse(videoString);
        return userVideo?.video
    };
    const [video, setVideo] = useState(getVideo());

    const saveVideo = userVideo => {
        if (userVideo) {
            console.log(userVideo);
            sessionStorage.setItem('video', JSON.stringify(userVideo));
            setVideo(userVideo);
        } else {
            setVideo(getVideo())
        }

        /* sessionStorage.setItem('video', JSON.stringify(uservideo));
        setvideo(uservideo.video); */
    };

    return {
        setVideo: saveVideo,
        video
    }

}