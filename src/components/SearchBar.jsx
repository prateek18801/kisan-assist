import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder='Search' />
            <span className='material-symbols-rounded'>search</span>
        </div>
    );
}

export default SearchBar;
