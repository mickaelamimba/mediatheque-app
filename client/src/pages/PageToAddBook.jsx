import React, {useEffect, useState} from 'react';
import AddBook from "../component/Book/AddBook";
import BookPreview from "../component/Book/BookPreview";
import {connect} from "react-redux";
import {getBook} from "../redux/actions/bookAction";
import {Spinner} from "react-bootstrap";
import ReactPaginate from "react-paginate";



const PageToAddBook = ({book,getBook}) => {
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
        <div className='row'>
            <AddBook/>
            <aside className="col-md-6 clo-lg-4">

                {book.loading ?(
                    <div>
                        <Spinner animation="border" size="sm" />
                        <Spinner animation="border" />
                    </div>

                ):book.error ?(
                    <div className="alert alert-danger">
                        <h2>{book.error}</h2>
                    </div>

                ):(
                    book.book.docs ?
                    book.book.docs.map((item,i)=>(
                        <BookPreview key={i} {...item}/>

                    )):
                        <p>not book in database </p>


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

            </aside>
            
        </div>
    );
};

const mapStateToProps  = (state) => ({book:state.book})
export default connect(mapStateToProps,{getBook}) (PageToAddBook);