import { useEffect, useRef } from 'react';
import './QueryBox.css';

const QueryContainer = ({ queryText, setQueryText, resetTranscript, applicationState, setApplicationState }) => {

    const textareaRef = useRef(null);

    useEffect(() => {
        textareaRef.current.style.height = 'inherit';
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }, [queryText]);


    const clearQueryContainer = () => {
        setQueryText('');
        resetTranscript();
        setApplicationState(0);
    }

    return (
        <div className='QueryBox'>
            <textarea
                ref={textareaRef}
                value={queryText}
                disabled={applicationState === 1}
                onChange={e => { setQueryText(e.target.value); }}
                style={{ fontSize: applicationState === 3 ? '0.8rem' : '1rem' }}
                placeholder={applicationState === 1 ? 'Speak your query' : 'Type your query'}
            />
            {queryText !== '' && <button onClick={() => clearQueryContainer()}>
                <span className='material-symbols-rounded'>close</span>
            </button>}
        </div>
    );
}

export default QueryContainer;
