import React, { useState } from 'react';
import useHackNewAPI from '../../hooks/useHackNewAPI';

// https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithHook = () => {
    const [query, setQuery] = useState("");
    const {
        setUrl,
        errorMessage,
        loading,
        data,
    } = useHackNewAPI(`https://hn.algolia.com/api/v1/search?query=''`,{hits:[]});
    console.log(data);
    return (
        <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
            <div className="flex mb-5 gap-x-5">
                <input type="text" className="border p-5 block w-full rounded-md transition-all"
                    defaultValue={query}
                    placeholder="Typing your keyword..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
                    onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}
                >Fetching</button>
            </div>
            {loading && <div className="loading h-8 w-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin m-5 mx-auto my-10"></div>}
            {!loading && errorMessage && <p className="error m-5">{errorMessage}</p>}
            <div className="flex flex-wrap gap-5">
                {!loading && data.hits.length > 0 &&
                    data.hits.map((items, index) => {
                        if (!items.title || items.title.length <= 0) return null;
                        return (
                            <h3 className="p-3 bg-gray-300 rounded-md" key={items.title}>{items.title}</h3>);
                    })}
            </div>
        </div>
    );
};

export default HackerNewsWithHook;