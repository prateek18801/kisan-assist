import './AnswerBox.css';

const AnswerBox = ({ answer }) => {
    return (
        <div className="AnswerBox">
            <div>{answer}</div>
        </div>
    );
}

export default AnswerBox;
