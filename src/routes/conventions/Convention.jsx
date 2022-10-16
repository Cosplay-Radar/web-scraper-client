import React from 'react';
import { Footer } from '../../components/Footer';

import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';
import './convention.css'

export function Convention () {
    const {data, loading} = useFetch(`${process.env.host}/conventions`);

    return (
        <div className='contentBody'>
            <Navbar/>
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
            <Footer/>
        </div>
    )
}