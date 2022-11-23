// Google Translate for webpage

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

// Custom google search

function searchGoogle() {
    location.href = encodeURI(`https://www.google.com/search?q=${document.getElementById('search-bar').value.replaceAll(' ', '+')}+site:www.agritech.tnau.ac.in OR site:farmer.gov.in`); 
}