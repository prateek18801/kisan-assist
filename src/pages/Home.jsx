import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useFetch from '../hooks/useFetch';

import Navbar from '../components/Navbar';
import Status from '../components/Status';
import QueryBox from '../components/QueryBox';
import SearchBar from '../components/SearchBar';
import AnswerBox from '../components/AnswerBox';
import Microphone from '../components/Microphone';

import './Home.css';

const Home = () => {

    const [url, setUrl] = useState('');
    const [queryText, setQueryText] = useState('');
    const [applicationState, setApplicationState] = useState(0);

    const { response, loading, error, setResponse } = useFetch(url);

    const { transcript, isMicrophoneAvailable, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        switch (applicationState) {
            case 0:
                setUrl('');
                setResponse('');
                SpeechRecognition.stopListening();
                break;
            case 1:
                SpeechRecognition.startListening({ continuous: true });
                break;
            case 2:
                setUrl(encodeURI(`${process.env.REACT_APP_API_BASE_URL}/api/v1/answer?q=${queryText}`));
                break;
            case 3:
                break;
            default:
                break;
        }
    }, [applicationState, queryText, setResponse]);

    useEffect(() => {
        if (!loading) setApplicationState(current => current === 2 ? 3 : current);
    }, [loading]);

    useEffect(() => {
        if (error) alert('Failed to connect to service :(');
    }, [error]);

    useEffect(() => {
        setQueryText(transcript);
    }, [transcript]);

    return (
        <div className='Home'>
            <Navbar />
            <SearchBar />
            <Status applicationState={applicationState} />
            <QueryBox
                queryText={queryText}
                setQueryText={setQueryText}
                resetTranscript={resetTranscript}
                applicationState={applicationState}
                setApplicationState={setApplicationState}
            />
            <AnswerBox response={response} />
            <Microphone
                applicationState={applicationState}
                setApplicationState={setApplicationState}
                isMicrophoneAvailable={isMicrophoneAvailable}
                browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
            />
        </div>
    );
}

export default Home;
