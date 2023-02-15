import './QueryBox.css';

const QueryContainer = ({ status, query, setQuery }) => {

    const handleHeight = (event) => {
        event.target.style.height = 'inherit';
        event.target.style.height = `${Math.min(event.target.scrollHeight, 200)}px`;
    }

    return (
        <div className="QueryBox">
            <textarea
                value={query}
                onChange={e => {
                    setQuery(e.target.value);
                    handleHeight(e);
                }}
                disabled={status === 1}
                placeholder={status === 1 ? 'Speak your query' : 'Type your query'}
            />
        </div>
    );
}

export default QueryContainer;
