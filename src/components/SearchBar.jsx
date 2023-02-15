import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder='Search' />
            <button>
                <span className='material-symbols-rounded'>search</span>
            </button>
        </div>
    );
}

export default SearchBar;
