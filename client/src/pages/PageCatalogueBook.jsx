import React, {useEffect, useState} from 'react';
import  {connect} from "react-redux"
import SearchAnSortBook from "../component/Catalogue/SearchAnSortBook";


import {getBook} from "../redux/actions/bookAction";
import ReactPaginate from "react-paginate";
import {Row, Spinner} from "react-bootstrap";
import BookCard from "../component/Catalogue/BookCard";

const PageCatalogueBook = ({book,getBook}) => {


    console.log(book.book)
    const [page, setPage]=useState(0)
    const handlePageClick =({selected})=>{
        let offset = Math.ceil(selected * book.book.totalPages);
        console.log('offset:',offset,'selected:',selected )
        setPage(selected+1)

    }

    useEffect(() =>{
        getBook(page)
    },[getBook,page])
    return (
        <div>
            <h1>Catalogue</h1>
            <hr/>

            <div className='row '>
                <section className="order-2 col-md-9  ">



                    {book.loading ?(
                        <div>
                            <Spinner animation="border" size="sm" />
                            <Spinner animation="border" />
                        </div>
                    ):book.error ?(
                        <h2>{book.error}</h2>
                    ):(

                        <Row  xs={1} md={2} lg={3} className="g-4">
                            { book.book.docs  ?
                                book.book.docs.map((item,i)=>(
                                        <BookCard key={i}  {...item}/>


                                )):
                                <p>not book in database </p>
                            }
                        </Row>
                    )

                    }
                    {book.book.docs&&
                    <ReactPaginate

                        pageCount={book.book.totalPages}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        containerClassName="pagination pagination-lg"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        activeClassName="active"
                        disabledClassName="disabled"

                    />
                    }

                </section>
                <SearchAnSortBook query={getBook}/>
            </div>


        </div>
    );
};
const mapStateToProps  = (state) => ({book:state.book})
export default connect(mapStateToProps,{getBook}) (PageCatalogueBook);