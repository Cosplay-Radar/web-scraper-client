import React from 'react';
import { Footer } from '../../components/Footer';

import { Navbar } from '../../components/Navbar';
import useFetch from '../../src/hooks/useFetch';
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
                                if (result === undefined) return <div></div>;
                                const output = detailsSplit(result.details)                              
                                    return <div className='search'>
                                        <div className='searchTitleContainer'>
                                            <h3 className='searchTitle'>{result.title}</h3>
                                        </div>
                                        <div className='searchDetailsContainer'>
                                            <p className='searchDetails'>{output.location}</p>
                                            <p className='searchDetails'>{output.date}</p>
                                        </div>
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