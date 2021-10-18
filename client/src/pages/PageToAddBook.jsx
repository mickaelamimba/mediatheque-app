import React, {useEffect} from 'react';
import AddBook from "../component/Book/AddBook";
import BookPreview from "../component/Book/BookPreview";
import {connect} from "react-redux";
import {getBook} from "../redux/actions/bookAction";
import {Spinner} from "react-bootstrap";



const PageToAddBook = ({book,getBook}) => {



    useEffect(() =>{
        getBook()
    },[getBook])

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

            </aside>
            
        </div>
    );
};

const mapStateToProps  = (state) => ({book:state.book})
export default connect(mapStateToProps,{getBook}) (PageToAddBook);