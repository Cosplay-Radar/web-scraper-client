import React from 'react';

import useFetch from '../hooks/useFetch';
import './search.css'

export function Search () {
    const {data, loading} = useFetch('http://localhost:8000/search');
    console.log(data)

    return (
        <div className='contentBody'>
            <div className='titleContainer'>
                <h1>Cosplay Market Research</h1>
            </div>
            <div className='resultsContainer'>
            <div className='column'>
                    <h2 className='columnTitle'>Popular Characters</h2>
                    <div className='characterContainer'>
                    { loading ? (
                        'Loading, please wait.'
                    ) : (
                        <div className='searchList'>
                            { data.characters.map(result => {
                                return <div className='search'>
                                            <h3>{result.title}</h3>
                                            <p>{result.link}</p>
                                        </div>
                            })}
                        </div>
                    )}
                    </div>
                </div>
                <div className='column'>
                    <h2 className='columnTitle'>Upcoming Conventions</h2>
                    <div className='conventionContainer'>
                    { loading ? (
                        'Loading, please wait.'
                    ) : (
                        <div className='searchList'>
                            { data['conventions'].map(result => {
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