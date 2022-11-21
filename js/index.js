const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

const micBtn = document.getElementById('mic-btn');
const sendBtn = document.getElementById('send-btn')
const queryInput = document.getElementById('query-input');
const queryMetaData = document.getElementById('query-meta');
const replyTxt = document.getElementById('reply-text');

micBtn.addEventListener('click', () => {
    if (micBtn.classList.contains('btn-success')) {
        micBtn.innerText = 'Stop Speaking';
        micBtn.classList.remove('btn-success');
        micBtn.classList.add('btn-danger');
        recognition.start();
    } else {
        micBtn.innerText = 'Start Speaking';
        micBtn.classList.remove('btn-danger');
        micBtn.classList.add('btn-success');
        recognition.stop();
    }
});

sendBtn.addEventListener('click', async () => {
    const response = await fetch(encodeURI(`http://localhost:3000/api/v1/answer?q=${queryInput.value}`));
    const json = await response.json();
    replyTxt.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Answer: </strong>${json.message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
});

recognition.onresult = (event) => {
    queryInput.value = event.results[0][0].transcript;
    queryMetaData.innerHTML = `Confidence: ${Math.round(event.results[0][0].confidence * 100)}%`;
}




