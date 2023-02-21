import './Translate.css';

const Translate = () => {
    return (
        <div className='Translate'>
            <button>
                <div id='google_translate_element'></div>
                <span className='material-symbols-rounded notranslate'>translate</span>
            </button>
        </div>
    );
}

export default Translate;
