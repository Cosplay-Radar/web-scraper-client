import React from 'react';

import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';
import './character.css';
import '../conventions/convention.css';
import { Footer } from '../../components/Footer';

export function Character () {
    const {data, loading} = useFetch(`${process.env.host}/characters`);

    let index = 1
    return (
        <div className='contentBody'>
            <Navbar/>
            <div className='resultsContainer'>
                <div className='column'>
                    <h2 className='columnTitle'>Current Popular Characters</h2>
                    <div className='characterContainer'>
                    { loading ? (
                        'Loading, please wait.'
                    ) : (
                        <div className='searchList'>
                            { data.map(result => {
                                return <div className='search'>
                                    <p className='characterPriority'>Number {index++}</p>
                                    <a className='character' href={`https://google.com/${result.href}`}>{result.title}</a>
                                </div>
                            })}
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}