import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder='Search' className='notranslate' />
            <button>
                <span className='material-symbols-rounded notranslate'>search</span>
            </button>
        </div>
    );
}

export default SearchBar;
