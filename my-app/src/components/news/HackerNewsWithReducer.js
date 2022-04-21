import axios from 'axios';
import React, { useEffect, useReducer, useRef, useState } from 'react';

const initialState = {
    hits: [],
    query: "",
    loading: true,
    errorMessage: "",
    url: "https://hn.algolia.com/api/v1/search?query=''",

}
const hackNewsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            return { ...state, hits: action.payload };
        }
        case 'SET_LOADING': {
            return { ...state, loading: action.payload }
        }
        case 'SET_ERROR': {
            return { ...state, errorMessage: action.payload }
        }
        case 'SET_QUERY': {
            return { ...state, query: action.payload }
        }
        case 'SET_URL': {
            return { ...state, url: action.payload }
        }
        default:
            break;
    }
}

// https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithReducer = () => {
    const [state, dispatch] = useReducer(hackNewsReducer, initialState);
    const handleFetchData = useRef({});
    handleFetchData.current = async () => {
        dispatch({
            type: "SET_LOADING",
            payload: true,
        });
        try {
            const response = await axios.get(state.url);
            dispatch({
                type: "SET_DATA",
                payload: response.data?.hits || []
            });
            dispatch({
                type: "SET_LOADING",
                payload: false,
            });
        }
        catch (e) {
            dispatch({
                type: "SET_LOADING",
                payload: false,
            });
            dispatch({
                type: "SET_ERROR",
                payload: `The error happen ${e}`,
            })
        }
    }
    useEffect(() => {
        handleFetchData.current();
    }, [state.url])
    return (
        <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
            <div className="flex mb-5 gap-x-5">
                <input type="text" className="border p-5 block w-full rounded-md transition-all"
                    defaultValue={state.query}
                    placeholder="Typing your keyword..."
                    onChange={(e) => dispatch({
                        type: "SET_QUERY",
                        payload: e.target.value,
                    })}
                />
                <button
                    disabled={state.loading}
                    style = {{
                        opacity: state.loading ? '0.5':'1'
                    }}
                    className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
                    onClick={() => dispatch({
                        type: "SET_URL",
                        payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
                    })}
                >Fetching</button>
            </div>
            {state.loading && <div className="loading h-8 w-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin m-5 mx-auto my-10"></div>}
            {!state.loading && state.errorMessage && <p className="error m-5">{state.errorMessage}</p>}
            <div className="flex flex-wrap gap-5">
                {!state.loading && state.hits.length > 0 &&
                    state.hits.map((items, index) => {
                        if (!items.title || items.title.length <= 0) return null;
                        return (
                            <h3 className="p-3 bg-gray-300 rounded-md" key={items.title}>{items.title}</h3>);
                    })}
            </div>
        </div>
    );
};

export default HackerNewsWithReducer;