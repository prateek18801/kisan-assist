import './AnswerBox.css';

const AnswerBox = ({ response }) => {
    return (
        <div className="AnswerBox">
            <div>Testing: {JSON.stringify(response)}</div>
        </div>
    );
}

export default AnswerBox;
