import './Status.css';

const Status = ({ status }) => {

    const STATUS_VALUES = ['Idle', 'Listening', 'Processing', 'Answer'];

    return (
        <div className="Status">
            <span>{STATUS_VALUES[status]}</span>
        </div>
    );
}

export default Status;
