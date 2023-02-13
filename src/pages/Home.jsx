import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Microphone from '../components/Microphone';

import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <SearchBar />
            <Microphone />
        </div>
    );
}

export default Home;
