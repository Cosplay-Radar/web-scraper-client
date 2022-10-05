import React from 'react';

import useFetch from '../hooks/useFetch';

export function Search () {
    const {data, loading} = useFetch('http://localhost:8000');
    return (
        <div>
            <h1>Im search component</h1>
            { data }
        </div>
    )
}