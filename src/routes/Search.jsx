import React from 'react';

import useFetch from '../hooks/useFetch.js';

export const Search = () => {
    const {data, loading} = useFetch('localhost:8000');
    return (
        <div>
            <h1>Im search component</h1>
            { data }
        </div>
    )
}