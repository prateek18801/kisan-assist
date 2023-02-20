import { useEffect, useRef } from 'react';

import './Microphone.css';

const Microphone = ({ applicationState, setApplicationState, isMicrophoneAvailable, browserSupportsSpeechRecognition }) => {

    const cooldownTimerRef = useRef(null);

    const startCooldownTimer = () => {
        cooldownTimerRef.current = setTimeout(() => {
            setApplicationState(2);
        }, 3000);
    }

    useEffect(() => {
        return () => { clearTimeout(cooldownTimerRef.current); }
    }, []);


    return (
        <div className='Microphone'>
            <button
                disabled={applicationState === 2}
                style={{ backgroundColor: applicationState === 1 ? 'var(--secondary-color)' : 'var(--primary-color)' }}
                onClick={() => {
                    if (!isMicrophoneAvailable) return alert('Microphone permission not granted :(');
                    if (!browserSupportsSpeechRecognition) return alert('Speech recognition not supported by browser :(');
                    if (applicationState === 0) startCooldownTimer();
                    setApplicationState(current => current === 1 ? 0 : 1);
                }}
            >
                <span className='material-symbols-rounded'>mic</span>
            </button>
        </div>
    );
}

export default Microphone;
