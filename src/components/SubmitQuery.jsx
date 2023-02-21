import SpeechRecognition from 'react-speech-recognition';

import './SubmitQuery.css';

const SubmitQuery = ({ applicationState, setApplicationState, fetchAnswer, speakAnswer }) => {
    return (
        <div className='SubmitQuery'>
            <button onClick={() => {
                if(applicationState === 3) return speakAnswer();
                SpeechRecognition.abortListening();
                setApplicationState(current => current === 3 ? 3 : 2);
                fetchAnswer();
            }}>
                <span className='material-symbols-rounded  notranslate'>{applicationState === 3 ? 'campaign' : 'done'}</span>
            </button>
        </div>
    );
}

export default SubmitQuery;
