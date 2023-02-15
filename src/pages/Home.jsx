import { useState } from 'react';

import Navbar from '../components/Navbar';
import Status from '../components/Status';
import SearchBar from '../components/SearchBar';
import Microphone from '../components/Microphone';

import './Home.css';

const Home = () => {

    const [query, setQuery] = useState('');
    const [status, setStatus] = useState(0);

    return (
        <div className='Home'>
            <Navbar />
            <SearchBar />
            <Status status={status} />
            <Microphone status={status} setStatus={setStatus} />
        </div>
    );
}

export default Home;
