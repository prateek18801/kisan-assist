import './Microphone.css';

const Microphone = ({ status, setStatus }) => {
    return (
        <div className='Microphone'>
            <button
                style={{ backgroundColor: status === 1 ? 'var(--secondary-color)' : 'var(--primary-color)' }}
                onClick={() => {
                    setStatus(current => current === 0 ? 1 : current === 1 ? 2 : 1)
                }}
            >
                <span className='material-symbols-rounded'>mic</span>
            </button>
        </div>
    );
}

export default Microphone;
