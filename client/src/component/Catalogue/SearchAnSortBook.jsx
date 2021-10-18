import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';

const SearchAnSortBook = ({query}) => {
    const [q, setQ]= useState('')
    console.log(q)
    const handleChange =(e)=>{
        setQ(e.target.value)

    }
    const handleSubmit =(values)=>{
        query({selected:values})
    }
    return (
        <aside className='order-1 col-md-3'>
            <Formik initialValues={{romans:"", cartoons:'',documentary:''}} onSubmit={handleSubmit}>
                {({status})=>(
                    <Form>
                        <div>
                            <input className='form-control' type="text" value={q}
                                   onChange={handleChange} placeholder="Search" />
                        </div>
                        <section>
                            <label className='form-check-label' htmlFor="romance">
                                Romance
                                <Field type="checkbox" className='form-check-input' name="romance" id="romance"  />

                            </label>
                            <label className='form-check-label' htmlFor=" science-fiction">
                                Science-fiction
                                <Field type="checkbox" className='form-check-input' name="science-fiction" id="science-fiction"  />

                            </label>
                            <label className='form-check-label' htmlFor="action">
                                Action
                                <Field type="checkbox" className='form-check-input' name="action" id='action'  />

                            </label>

                        </section>
                    </Form>
                )
                }

            </Formik>



        </aside>
    );
};

export default SearchAnSortBook;