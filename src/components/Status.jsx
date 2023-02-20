import './Status.css';

const Status = ({ applicationState }) => {

    const APPLICATION_STATE_VALUES = ['Idle', 'Listening', 'Processing', 'Answer'];

    return (
        <div className="Status">
            <span>{APPLICATION_STATE_VALUES[applicationState]}</span>
        </div>
    );
}

export default Status;
