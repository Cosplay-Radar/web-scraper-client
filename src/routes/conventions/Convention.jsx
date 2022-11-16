import React from 'react';
import { Footer } from '../../components/Footer';

import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';
import './convention.css'

export function Convention () {
    const {data, loading} = useFetch(`https://cosplay-radar.herokuapp.com/conventions`);

    return (
        <div className='contentBody'>
            <Navbar/>
            <div className='resultsContainer'>
                <div className='column'>
                    <h2 className='columnTitle'>Upcoming Conventions</h2>
                    <div className='conventionContainer'>
                    { loading ? (
                        <p id='loadingText'>'Loading, please wait.'</p>
                    ) : (
                        <div className='searchList'>
                            { data.map(result => {
                                return <div className='search'>
                                    <h3>{result.title}</h3>
                                    <h4>{result.date}</h4>
                                    <h4>{result.location}</h4>
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