import { useEffect, useRef } from 'react';
import './QueryBox.css';

const QueryContainer = ({ status, query, setQuery }) => {

    const ref = useRef(null);

    useEffect(() => {
        ref.current.style.height = 'inherit';
        ref.current.style.height = `${Math.min(ref.current.scrollHeight, 200)}px`;
    }, [query]);

    return (
        <div className="QueryBox">
            <textarea
                ref={ref}
                value={query}
                disabled={status === 1}
                onChange={e => { setQuery(e.target.value); }}
                placeholder={status === 1 ? 'Speak your query' : 'Type your query'}
            />
        </div>
    );
}

export default QueryContainer;
