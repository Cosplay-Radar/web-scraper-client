import React from 'react';

import useFetch from '../../hooks/useFetch';
import './character.css';
import '../conventions/convention.css';

export function Character () {
    const {data, loading} = useFetch('http://localhost:8000/characters');

    return (
        <div className='contentBody'>
            <div className='titleContainer'>
                <h1>Cosplay Market Research</h1>
            </div>
            <div className='resultsContainer'>
                <div className='column'>
                    <h2 className='columnTitle'>Current Popular Characters</h2>
                    <div className='conventionContainer'>
                    { loading ? (
                        'Loading, please wait.'
                    ) : (
                        <div className='searchList'>
                            { data.map(result => {
                                return <div className='search'>
                                    <a href={`https://google.com/${result.href}`}>{result.title}</a>
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