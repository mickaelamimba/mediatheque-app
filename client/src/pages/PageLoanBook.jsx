import React, {useEffect, useState} from 'react';
import BookPreview from "../component/Book/BookPreview";
import {connect} from "react-redux";

import {getLoan} from "../redux/actions/loanAction";

const PageLoanBook = ({loan,getLoan}) => {

const {...data}= loan

    return (
        <section>
            <h1>Mes livres</h1>
            <hr/>

            {loan.loading?
                <p>loding....</p>:
                console.log(loan.data )

            }


            {/*{loan.loan ?
                Object.entries(loan.loan)
                .map(({book})=>{
                    book.map((item)=>(
                        <BookPreview {...item}/>
                    ))
                }):
                <p>not book</p>
            }*/}



        </section>
    );
};
const mapStateToProps  = (state) => ({loan:state.loan})
export default connect(mapStateToProps,{getLoan})(PageLoanBook);