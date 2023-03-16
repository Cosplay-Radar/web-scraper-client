import React, { useState } from 'react';
import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import './convention.css'
import axios from 'axios';

export function Convention () {
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const url = `https://cosplay-radar.herokuapp.com/conventions?page=${page}`

    const useFetch = (url) => {
        const [data, setData] = useState([]);

        useEffect(() => {
            if (!url) return;

            const fetchData = async () => {
                setLoading(true);
                await axios
                    .get(url)
                    .then((response) => {
                        setData(response.data);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error(error)
                        return error
                    })
            };
            fetchData();
        }, [url]);
        return { data };
    };

    let { data } = useFetch(url)

      const handlePrevious = () => {
        setPage((p) => {
            if (p === 1) return p;
            return p - 1;
        });
      }

      const handleNext = () => {
        setPage((p) => {
            setPageCount(data.pagination.pageCount);
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
                        <div id='loaderContainer'>
                            <div className="spinner"></div>
                        </div>
                    ) : data.cons ? (
                        <div className='searchList'>
                            { data.cons.map(result => {
                                if (result === undefined) return <div></div>;                        
                                    return (
                                    <div className='search'>
                                        <div className='searchTitleContainer'>
                                            <h3 className='searchTitle'>{result.title}</h3>
                                        </div>
                                        <div className='searchDetailsContainer'>
                                            <p className='searchDetails'>{result.location}</p>
                                            <p className='searchDetails date'>{result.date}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div>Error Fetching Data</div>
                    )
                }
                    </div>
                </div>
                <div id='pageNav'>
                    <button className='page-button' disabled={page === 1} onClick={handlePrevious}>Previous</button>
                    <span className='page-counter'>Page: {page} / {data.pagination?.pageCount}</span>
                    <button className='page-button' disabled={page === pageCount} onClick={handleNext}>Next</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}