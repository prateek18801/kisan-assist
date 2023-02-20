import './AnswerBox.css';

const AnswerBox = ({ response }) => {
    return (
        <div className="AnswerBox">
            <div>{response?.message}</div>
        </div>
    );
}

export default AnswerBox;
