import { useRef } from 'react';
import './SearchBar.css';

const SearchBar = () => {

    const searchRef = useRef('');

    const googleSearch = () => {
        window.location.replace(encodeURI(`https://www.google.com/search?q=${searchRef.current.value.replaceAll(' ', '+')}+site:www.agritech.tnau.ac.in OR site:farmer.gov.in`));
    }

    return (
        <div className='SearchBar'>
            <input ref={searchRef} type='text' placeholder='Search' className='notranslate' />
            <button onClick={googleSearch}>
                <span className='material-symbols-rounded notranslate'>search</span>
            </button>
        </div>
    );
}

export default SearchBar;
