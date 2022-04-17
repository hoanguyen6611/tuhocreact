import axios from 'axios';
import lodash from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const handleFetchData = useRef({});
    handleFetchData.current = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
            setHits(response.data?.hits || []);
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
            setErrorMessage(`The error happen ${e}`);
        }
    }
    const handleUpdateQuery = lodash.debounce((e) => {
        setQuery(e.target.value);
    }, 1000);
    useEffect(() => {
        handleFetchData.current();
    }, [query])
    return (
        <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
            <input type="text" className="border p-5 block w-full rounded-md mb-5 transition-all"
                defaultValue={query}
                placeholder="Typing your keyword..."
                onChange={handleUpdateQuery} />
            {loading && <div className="loading h-8 w-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin m-5 mx-auto my-10"></div>}
            {!loading && errorMessage && <p className="error m-5">{errorMessage}</p>}
            <div className="flex flex-wrap gap-5">
                {!loading && hits.length > 0 &&
                    hits.map((items, index) => <h3 className="p-3 bg-gray-300 rounded-md" key={items.title}>{items.title}</h3>)}
            </div>
        </div>
    );
};

export default HackerNews;