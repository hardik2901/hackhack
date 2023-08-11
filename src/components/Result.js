import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Result = ({ showResult, quizs, marks, quizHeading, questionAnswer }) => {

    const [advise, setAdvise] = useState('')

    const fetchData = async () => {
        try {
            const { data } = await axios.post('http://localhost:8000', { questionAnswer, quizHeading })
                .then(response => {
                    console.log('Response:', response.data);
                    setAdvise(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <ul className="list-unstyled">
                                {advise}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;