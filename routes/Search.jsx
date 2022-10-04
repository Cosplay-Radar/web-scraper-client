import React from 'react';

import useFetch from '../hooks/useFetch.js';

export const Search = () => {
    const {data, loading} = useFetch('localhost:8000')

}