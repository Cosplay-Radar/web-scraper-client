import React from 'react';

import useFetch from '../../hooks/useFetch';
import './convention.css'

export function Convention () {
    const {data, loading} = useFetch('http://localhost:8000/conventions');

    return (
        <div className='contentBody'>
            <div className='titleContainer'>
                <h1>Cosplay Market Research</h1>
            </div>
            <div className='resultsContainer'>
                <div className='column'>
                    <h2 className='columnTitle'>Upcoming Conventions</h2>
                    <div className='conventionContainer'>
                    { loading ? (
                        'Loading, please wait.'
                    ) : (
                        <div className='searchList'>
                            { data.map(result => {
                                return <div className='search'>
                                    <h3>{result.convention}</h3>
                                </div>
                            })}
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}