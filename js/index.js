// Speech Recognition Module

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

const micBtn = document.getElementById('mic-btn');
const sendBtn = document.getElementById('send-btn')
const queryInput = document.getElementById('query-input');
const queryMetaData = document.getElementById('query-meta');
const replyTxt = document.getElementById('reply-text');
const deleteBtn = document.getElementById('delete-btn');

micBtn.addEventListener('click', () => {
    if (micBtn.classList.contains('mdl-button--colored')) {
        micBtn.innerHTML = '<i class="material-icons">mic</i>';
        micBtn.classList.remove('mdl-button--colored');
        recognition.start();
    } else {
        micBtn.innerHTML = '<i class="material-icons">mic_off</i>';
        micBtn.classList.add('mdl-button--colored');
        recognition.stop();
    }
});

sendBtn.addEventListener('click', async () => {
    if (document.getElementById('p2'))
        document.getElementById('p2').classList.remove('d-none');
    const lang = document.getElementsByClassName('goog-te-combo')[0].value;
    if(!updated) return;
    const response = await fetch(encodeURI(`https://kisan-assist.herokuapp.com/api/v1/answer?q=${queryInput.innerText}`));
    const json = await response.json();
    console.log(json);
    replyTxt.innerHTML = `<div style="padding: 1rem; background-color: rgb(141, 255, 156); border-radius: 1rem 1rem 0 1rem;">
                            <strong>Answer: </strong><div id="query-ans">${json.message}</div>
                        </div>
                        <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored" id="speak-btn" onclick="readAloud()">
                            <i class="material-icons">volume_up</i>
                        </button>`;
    speak(json.message);
});

function readAloud() {
    speak(document.getElementById('query-ans').innerText);
}

deleteBtn.addEventListener('click', () => {
    queryInput.innerHTML = '';
});


let updated = false;
recognition.onresult = (event) => {
    if (!updated) {
        queryInput.innerText = event.results[0][0].transcript;
        updated = true;
    } else {
        queryInput.innerText += ` ${event.results[0][0].transcript}`;
    }
    const confidence = Math.round(event.results[0][0].confidence * 100);
    if(confidence > 90) {
        queryMetaData.innerHTML = '😄';
    }
    else if(confidence > 75) {
        queryMetaData.innerHTML = '😃';
    }
    else if(confidence > 65) {
        queryMetaData.innerHTML = '😐';
    } else {
        queryMetaData.innerHTML = '😥'
    }
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
    if (synth.speaking) {
        console.error("speechSynthesis.speaking");
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onend = function (event) {
        console.log("SpeechSynthesisUtterance.onend");
    };

    utterance.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
    };
    utterance.voice = voices[12];
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    synth.speak(utterance);
}
