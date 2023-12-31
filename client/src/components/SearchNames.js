import React, { useState } from 'react';
import { handleFormSubmit } from '../api';
import '../styles.css';

import NavBar from './NavBar';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';

function SearchNames() {
    const [names, setNames] = useState([]);
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await handleFormSubmit(query);
        if (result.error) {
            console.error(result.error);
        } else {
            if (Array.isArray(result.names)) {
                setNames(result.names);
            } else {
                console.error("Received unexpected data format from server");
            }
        }
        setQuery('');
    };
    return (
        <div>
            <NavBar />
            <div className="container">
                <SearchForm 
                    query={query} 
                    onQueryChange={e => setQuery(e.target.value)}
                    onSubmit={handleSubmit}
                />
                <ResultsList names={names} />
            </div>
        </div>
    );
}

export default SearchNames;
