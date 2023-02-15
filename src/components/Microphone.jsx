import './Microphone.css';

const Microphone = ({ status, setStatus, isMicrophoneAvailable, browserSupportsSpeechRecognition }) => {
    return (
        <div className='Microphone'>
            <button
                style={{ backgroundColor: status === 1 ? 'var(--secondary-color)' : 'var(--primary-color)' }}
                onClick={() => {
                    if (!isMicrophoneAvailable) return alert('Microphone permission not granted :(');
                    if (!browserSupportsSpeechRecognition) return alert('Speech recognition not supported by browser :(');
                    setStatus(current => current === 0 ? 1 : current === 1 ? 2 : 1)
                }}
            >
                <span className='material-symbols-rounded'>mic</span>
            </button>
        </div>
    );
}

export default Microphone;
