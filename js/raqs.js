const fetchQuestions = async () => {
    const response = await fetch('https://kisan-assist.herokuapp.com/api/v1/RAQ');
    const json = await response.json();
    let dom = '', i = 1;
    json.questions.forEach(question => {
        dom += `<div class="accordion-item">
        <h2 class="accordion-header" id="heading-${i}"> <button class="accordion-button collapsed border-0"
                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                aria-controls="flush-collapseOne">  ${question.question} </button> </h2>
        <div id="flush-collapseOne" id ="collapse-${i}" class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne"
            data-bs-parent="#myAccordion">
            <div class="accordion-body p-0">
                ${question.answer}
                </ul>
            </div>
        </div>
    </div>`;
        i++;
    });
    document.getElementById('raq-container').innerHTML = dom;
}

fetchQuestions();
