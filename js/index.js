// Speech Recognition Module

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
    const response = await fetch(encodeURI(`https://kisan-assist.herokuapp.com/api/v1/answer?q=${queryInput.value}`));
    const json = await response.json();
    replyTxt.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Answer: </strong>${json.message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    speak(json.message);
});

recognition.onresult = (event) => {
    queryInput.value = event.results[0][0].transcript;
    queryMetaData.innerHTML = `Confidence: ${Math.round(event.results[0][0].confidence * 100)}%`;
}

// Text to Speech

const synth = window.speechSynthesis;
let voices = [];
function populateVoiceList() {
    voices = synth.getVoices();
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[0];
    utterance.pitch = 1;
    utterance.rate = 1;
    synth.speak(utterance);
}

// Google Translate for webpage

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}