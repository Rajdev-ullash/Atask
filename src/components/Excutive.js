import React from 'react';

import sl1 from '../images/sl1.jpg'
import sl2 from '../images/sl2 .jpg'
import sl3 from '../images/sl3.jpeg'

import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import c5 from '../images/c5.jpg'

const Excutive = () => {


    const cards = [{
        "img": c1,
        "cardTitle":"Professor Sabur Mollah: President",
        "cardBody": "Sabur Mollah holds a Chair in Financial Management at Sheffield University Management School. Prior to joining the University of Sheffield, he was a Professor of Accounting and Finance at Swansea University, and a Professor of Finance at the University of Hull. He has published his research in world-leading and "
    },
    {
        "img": c2,
        "cardTitle":"Professor Saeed Akbar: Senior Vice President",
        "cardBody": "Saeed Akbar is a Professor in Accounting and Finance, and Head of Accounting, Finance and Economics, at the University of Bradford School of Management.  He is a Qualified Accountant and member of the Chartered Institute of Management Accountants [CIMA]. Prior to joining the University of Bradford "
    },
    {
        "img": c3,
        "cardTitle":"Professor Jill Atkins: Vice President – Head of Business and Community Engagement",
        "cardBody": "Jill Atkins holds a Chair in Financial Management at Sheffield University Management School and is also a visiting professor at the University of the Witwatersrand, South Africa. She previously worked as a Professor at Henley Business School and "
    },
    {
        "img": c4,
        "cardTitle":"Professor Collins Ntim: Vice-President – Head of Research and Development",
        "cardBody": "Collins Ntim is a Professor in Accounting at Southampton Business School, University of Southampton.  Prior to joining the University of Southampton, he was Professor in Accounting, at the University of Huddersfield.  " 
    },
    {
        "img": c5,
        "cardTitle":"Professor Khaled Hussainey: Vice-President – Head of Events and Communications ",
        "cardBody": "Khaled Hussainey is Professor of Accounting and Financial Management and Research Lead for Accounting and Financial Management in the Faculty of Business and Law, at the University of Portsmouth "
    }
    ]

    return (
        <div>
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={sl1} class="d-block w-100" style={{"height":"34rem"}} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={sl2} class="d-block w-100" style={{"height":"34rem"}} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={sl3} class="d-block w-100" style={{"height":"34rem"}} alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container mt-5">
                <div>
                    <h2 className="text-center">Executive Committee</h2>
                    <div className="d-flex justify-content-evenly">
                        <div className="row ">
                            {
                                cards.map(card => <div className="col-md-4 mt-5">
                                    <div class="card" style={{ "width": "23rem","height": "40rem", "boxShadow":"0 0 10px grey" }}>
                                        <img className="img-fluid" src={card.img} class="card-img-top h-50" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{card.cardTitle}</h5>
                                            <p class="card-text">{card.cardBody}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Excutive;