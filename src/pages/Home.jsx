import Navbar from '../components/Navbar';
import Status from '../components/Status';
import SearchBar from '../components/SearchBar';
import Microphone from '../components/Microphone';

import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <SearchBar />
            <Status />
            <Microphone />
        </div>
    );
}

export default Home;
