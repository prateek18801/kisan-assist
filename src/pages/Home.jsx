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
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState(0);
    const { response, loading, error } = useFetch(url);

    const { transcript, isMicrophoneAvailable, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        if (status === 1) {
            SpeechRecognition.startListening({ continuous: true });
        } else if (status === 2) {
            SpeechRecognition.stopListening();
            // Testing
            setUrl('https://jsonplaceholder.typicode.com/todos')
        }
    }, [status]);

    useEffect(() => {
        if (!loading) setStatus(current => current === 2 ? 3 : current);
    }, [loading]);

    useEffect(() => {
        if (error) alert('Failed to connect to service :(');
    }, [error]);

    useEffect(() => {
        setQuery(transcript);
    }, [transcript]);

    return (
        <div className='Home'>
            <Navbar />
            <SearchBar />
            <Status status={status} />
            <QueryBox
                query={query}
                status={status}
                setQuery={setQuery}
            />
            <AnswerBox response={response} />
            <Microphone
                status={status}
                setStatus={setStatus}
                isMicrophoneAvailable={isMicrophoneAvailable}
                browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
            />
        </div>
    );
}

export default Home;
