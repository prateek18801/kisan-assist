import './Microphone.css';

const Microphone = ({ applicationState, setApplicationState, isMicrophoneAvailable, browserSupportsSpeechRecognition }) => {
    return (
        <div className='Microphone'>
            <button
                disabled={applicationState === 2}
                style={{ backgroundColor: applicationState === 1 ? 'var(--secondary-color)' : 'var(--primary-color)' }}
                onClick={() => {
                    if (!isMicrophoneAvailable) return alert('Microphone permission not granted :(');
                    if (!browserSupportsSpeechRecognition) return alert('Speech recognition not supported by browser :(');
                    setApplicationState(current => current === 1 ? 0 : 1);
                }}
            >
                <span className='material-symbols-rounded notranslate'>mic</span>
            </button>
        </div>
    );
}

export default Microphone;
