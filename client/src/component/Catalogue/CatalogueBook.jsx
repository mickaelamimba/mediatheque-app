import React from 'react';



const CatalogueBook = ({title,picture,releaseDate,description,author,genre,available}) => {

    return (
            <article className="card col-md-6 col-lg-4 ">
                <figure  >
                    <img className="img-thumbnail card-img-top disabled " src={picture} width="150" alt="images-tes"/>
                </figure>
                <div className='card-body'>
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <blockquote>
                            <span>{releaseDate}</span>
                        </blockquote>
                    </div>
                    <section>
                        <p className="card-title"> {description}</p>
                        <div>
                            <p>{author}</p>
                            <p>{genre}</p>
                        </div>




                    </section>
                </div>
            </article>

    );
};

export default CatalogueBook;