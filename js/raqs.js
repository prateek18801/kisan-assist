const fetchQuestions = async () => {
    const response = await fetch('https://kisan-assist.herokuapp.com/api/v1/RAQ');
    const json = await response.json();
    let dom = '', i = 1;
    json.questions.forEach(question => {
        dom += `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading-${i}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${i}" aria-expanded="false" aria-controls="collapse-${1}">
                            ${question.question}
                        </button>
                    </h2>
                    <div id="collapse-${i}" class="accordion-collapse collapse" aria-labelledby="heading-${i}" data-bs-parent="#raq-container">
                        <div class="accordion-body">
                            ${question.answer}   
                        </div>
                    </div>
                </div>`;
        i++;
    });
    document.getElementById('raq-container').innerHTML = dom;
}

fetchQuestions();
