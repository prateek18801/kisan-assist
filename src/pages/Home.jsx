import { useCallback, useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import Navbar from '../components/Navbar';
import Status from '../components/Status';
import QueryBox from '../components/QueryBox';
import SearchBar from '../components/SearchBar';
import AnswerBox from '../components/AnswerBox';
import Translate from '../components/Translate';
import Microphone from '../components/Microphone';
import SubmitQuery from '../components/SubmitQuery';

import './Home.css';

const Home = () => {

    const [answer, setAnswer] = useState('');
    const [queryText, setQueryText] = useState('');
    const [applicationState, setApplicationState] = useState(0);

    const { speak } = useSpeechSynthesis();
    const { transcript, isMicrophoneAvailable, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    const fetchAnswer = async () => {
        try {
            const response = await fetch(encodeURI(`${process.env.REACT_APP_API_BASE_URL}/api/v1/answer?q=${queryText}`));
            const json = await response.json();
            if (json.ok) {
                setAnswer(json.message);
                setApplicationState(3);
            }
            else alert('Invalid response');
        } catch (err) {
            alert('Failed to fetch' + err.message);
        }
    }

    const speakAnswer = useCallback(() => { speak({ text: answer }); }, [answer]);

    useEffect(() => {
        switch (applicationState) {
            case 0:
                SpeechRecognition.abortListening();
                break;
            case 1:
                SpeechRecognition.startListening({ continuous: true });
                break;
            case 2:
                break;
            case 3:
                speakAnswer(answer);
                break;
            default:
                break;
        }
    }, [applicationState, speakAnswer, answer]);

    useEffect(() => { setQueryText(transcript); }, [transcript]);

    return (
        <div className='Home'>
            <Navbar />
            <SearchBar />
            <Status applicationState={applicationState} />
            <QueryBox
                queryText={queryText}
                setAnswer={setAnswer}
                setQueryText={setQueryText}
                resetTranscript={resetTranscript}
                applicationState={applicationState}
                setApplicationState={setApplicationState}
            />
            <AnswerBox answer={answer} />
            <Translate />
            <Microphone
                applicationState={applicationState}
                setApplicationState={setApplicationState}
                isMicrophoneAvailable={isMicrophoneAvailable}
                browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
            />
            <SubmitQuery
                fetchAnswer={fetchAnswer}
                speakAnswer={speakAnswer}
                applicationState={applicationState}
                setApplicationState={setApplicationState}
            />
        </div>
    );
}

export default Home;
