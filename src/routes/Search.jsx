import React from 'react';

import useFetch from '../hooks/useFetch';
import './search.css'

export function Search () {
    const {data, loading} = useFetch('http://localhost:8000/search');
    const characters = [{title: "Random character title", snippet: "A useful snippet of information for popular characters", link: "hyperlink"}];
    const conventions = [{title: "Random convention title", snippet: "A useful snippet of information for upcoming conventions", link: "hyperlink"}];
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
                            { characters.map(result => {
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
                <div className='column'>
                    <h2 className='columnTitle'>Upcoming Conventions</h2>
                    <div className='conventionContainer'>
                    { loading ? (
                        'Loading, please wait.'
                    ) : (
                        <div className='searchList'>
                            { conventions.map(result => {
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
            </div>
        </div>
    )
}