import React from 'react';
import moment from "moment";

const BookPreview = ({title,picture,description,releaseDate,author,genre}) => {
    return (
        <section className='col-md-12'>
            <hr/>
            <div className="row">
                <figure className='figure col-md-3' >
                    <img className="img-thumbnail" src={picture} alt="img-tes"/>
                </figure>

                <section className='col-md-9' >
                    <div className="row" >
                        <h3 className="col-md-4" >{title}</h3>
                        <span className="col-md-8" >{moment(releaseDate).subtract(10, 'days').calendar()}</span>
                    </div>
                    <div><p>{description}</p></div>
                    <div className="row">
                        <p className="col">Auteur :<span>{author}</span></p>
                        <p className="col">Genre :<span>{genre}</span></p>
                    </div>


                </section>
            </div>


        </section>
    );
};

export default BookPreview;

