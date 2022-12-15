import React, { useState } from 'react';
import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import useFetch from '../../hooks/useFetch.js';
import './convention.css'
import axios from 'axios';

export function Convention () {
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const {data, loading} = useFetch(`https://cosplay-radar.herokuapp.com/conventions?page=${page}`);

    useEffect(() => {
        (
            async function() {
                try {
                    const response = await axios.get(`https://cosplay-radar.herokuapp.com/conventions?page=${page}`);
                    setPageCount(response.pagination.pageCount);
                } catch (error) {
                    console.log(error)
                }
            }
        )();
    }, [data, page]);

    const detailsSplit = (string) => {
        const output = {date:'', location: ''}
        for (let i = string.length; i > 0; i--) {
          if (!isNaN(parseInt(string[i]))) {
            output.date = string.slice(0, i+1);
            output.location = string.slice(i+1, string.length);
            return output
          }
        }
        return output;
      }

      const handlePrevious = () => {
        setPage((p) => {
            if (p === 1) return p;
            return p - 1;
        });
      }

      const handleNext = () => {
        setPage((p) => {
            console.log(p, pageCount)
            if (p === pageCount) return p;
            return p + 1;
        });
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
                    ) : data && data.cons ? (
                        <div className='searchList'>
                            { data.cons.map(result => {
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
                    ) : (
                        <div>Error Fetching Data</div>
                    )
                }
                    </div>
                </div>
                <div id='pageNav'>
                    <div id='pageSelect'>
                        <p>Page: {page} / {data.pagination?.pageCount}</p>
                    </div>
                    <div id='buttonSelect'>
                        <button disabled={page === 1} onClick={handlePrevious}>Previous</button>
                        <button disabled={page === pageCount} onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}