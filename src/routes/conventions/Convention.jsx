import React from 'react';
import { Footer } from '../../components/Footer';

import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';
import './convention.css'

export function Convention () {
    const {data, loading} = useFetch(`https://cosplay-radar.herokuapp.com/conventions`);

    const detailsSplit = (string) => {
        const output = {date:'', location: ''}
        console.log(string, typeof string)
        for (let i = string.length; i > 0; i--) {
          if (!isNaN(parseInt(string[i]))) {
            output.date = string.slice(0, i+1);
            output.location = string.slice(i+1, string.length);
            return output
          }
        }
        return output
      }

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
                                const output = detailsSplit(result.description)
                                return <div className='search'>
                                    <h3>{result.title}</h3>
                                    <p>{output.location}</p>
                                    <p>{output.time}</p>
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