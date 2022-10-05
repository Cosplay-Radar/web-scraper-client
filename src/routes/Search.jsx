import React from 'react';

import useFetch from '../hooks/useFetch';
import './search.css'

export function Search () {
    const {data, loading} = useFetch('http://localhost:8000/search');
    return (
        <div>
            <div className='titleContainer'>
                <h1>Cosplay Conventions</h1>
            </div>
            <div className='contentContainer'>
            { loading ? (
                'Loading, please wait.'
            ) : (
                <div className='searchList'>
                    { data.map(result => {
                        return <div className='search'>
                            <h3>{result.title}</h3>
                            <p>{result.snippet}</p>
                            <a href={result.link}>{result.link}</a>
                        </div>
                    })}
                </div>
            )}
            </div>
        </div>
    )
}