import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import useVideo from './useVideo';
import useInput from './useInput';
import VideoPlayer from './VideoPlayer';

function Start() {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputFile, setInputFile] = useState({ preview: '', data: '', type: '', name: '' })
    const [displayVideoInputFile, setDisplayVideoInputFile] = useState('');
    const { video, setVideo } = useVideo();
    const { input, setInput } = useInput();
    const [showValidInputFileType, setShowValidInputFileType] = useState(false);

    useEffect(() => {
        console.log('useEffect')
        console.log(video)
        if (video) {
            setShow(true);
        }
        if (input) {
            setDisplayVideoInputFile(input);
        }
    })

    const handleFileChange = (e) => {
        window.alert('filechange');
        const inputFile = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
            type: e.target.files[0].type,
            name: e.target.files[0].name
        }
        setInputFile(inputFile);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!inputFile.type.includes('audio')) {
            setShowValidInputFileType(true);
        } else {

            let formData = new FormData()
            formData.append('file', inputFile.data)
            formData.append('fileName', inputFile.name)

            sessionStorage.removeItem('video');
            sessionStorage.removeItem('input');
            setVideo();
            setInput();
            setLoading(true);
            setShow(false);
            setShowValidInputFileType(false);
            setDisplayVideoInputFile(inputFile.name);

            const response = await fetch('/inputFile', {
                method: 'POST',
                body: formData,
            }).then(res => res.json())
                .then(result => {
                    setShow(result.success);
                    setLoading(false);
                    setVideo(result);
                    setInput(inputFile.name);
                });
        }
    }

    return (
        <div className='start-page-div'>
            <h1 className='page-title'>Start</h1>
            <div>
                <form onSubmit={handleSubmit} className='upload-file-form'>
                    <label>Start with uploading a file...</label>
                    <input type='file'
                        name='file'
                        onChange={(e) => {if (e?.target?.files.length > 0) handleFileChange(e)}}
                        accept="audio/*"
                        class="upload-box" />

                    {showValidInputFileType && (
                        <p>Please select a valid audio file!</p>
                    )}
                    <button className="submit-button"
                        disabled={loading}
                        type='submit'>Make Video</button>
                </form>
            </div>

            {
                loading &&
                (<div className='loader-div'>
                    <BeatLoader color='#1762A7' />
                </div>)
            }

            {video &&
                show &&
                <VideoPlayer inputFile={displayVideoInputFile} />
            }
        </div>
    )
}

export default Start
