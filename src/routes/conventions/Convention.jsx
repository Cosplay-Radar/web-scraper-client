import React from 'react';
import { Footer } from '../../components/Footer';

import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch';
import './convention.css'

export function Convention () {
    const {data, loading} = useFetch(`https://cosplay-radar.herokuapp.com/conventions`);

    function Separate (object) {
        const result = {
            name: "",
            date: "",
            location: "",
        }
        let string = object.convention;
        // while (result.location === "") {
        //     result.name = string.substring(string.indexOf('\n'), string.indexOf('\n') + 1)
        //     result.date = string.substring(string.indexOf('\n') + 1, string.indexOf('\n') + 2)
        //     result.date = string.substring(string.indexOf('\n') + 2, string.indexOf('\n') + 3)
        // }
        console.log(string)
        return string;
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
                                result = Separate(result)
                                return <div className='search'>
                                    <h3>{result.name}</h3>
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