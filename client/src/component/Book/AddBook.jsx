import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

import {connect} from "react-redux";
import {postBook} from "../../redux/actions/bookAction";


const AddBook = ({postBook}) => {
    const[file, setFile]=useState({})
    const isAuthenticated = window.localStorage.getItem('isAuthenticated')
    let usrRole =JSON.parse(isAuthenticated)
    const handleSubmit = (values)=>{

        let picture = new FormData();
        picture.append('picture',file)
        picture.append('token',usrRole.token)
        picture.append('title',values.title)
        picture.append('releaseDate',values.releaseDate)
        picture.append('description',values.description)
        picture.append('author',values.author)
        picture.append('genre',values.genre)
        postBook(picture)

    }
    return (
        <div className='mb-3 col-md-6' >
            <Formik initialValues={{title:'', picture:'',releaseDate:'', description:'',author:'',genre:''}}
                    onSubmit={handleSubmit}>
                {({isSubmitting,setFieldValue})=>(
                    <Form >
                        <fieldset className="container">
                            <legend>Ajouter un livre</legend>
                            <div className='mb-3'>
                                <Field className='form-control' name="title" placeholder="Titre"  />
                                <ErrorMessage className='text-danger' name="title" component="p" />
                            </div>
                            <div className='mb-3'>
                                <input  type='file' className='form-control' name="picture" onChange={(event)=>{
                                    setFieldValue('picture',setFile(event.target.files[0]))
                                }}/>

                                <ErrorMessage className='text-danger' name="picture" component="p" />
                            </div>

                            <div className='mb-3'>
                                <Field component="textarea" className='form-control' name="description" placeholder="Description"   />
                                <ErrorMessage className='text-danger' name="description" component="p" />
                            </div>

                            <div className="row">
                                <div className='mb-3 col-md-6'>
                                    <Field  className='form-control' name="author"  placeholder="Auteur"  />
                                    <ErrorMessage className='text-danger' name="author" component="p" />
                                </div>
                                <div className='mb-3 col-md-6'>
                                    <Field  className='form-control' name="genre" placeholder="Genre"  />
                                    <ErrorMessage className='text-danger' name="genre" component="p" />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <Field type='date' className='form-control' name="releaseDate" placeholder="Date de parution"  />
                                <ErrorMessage className='text-danger' name="releaseDate" component="p" />
                            </div>
                            <button className='btn btn-primary' type='submit' disabled={isSubmitting}>Ajouter</button>

                        </fieldset>

                    </Form>
                )}

            </Formik>

        </div>
    );
};
const mapStateToProps  = (state) => ({
    book:state.book

})

export default connect(mapStateToProps,{postBook}) (AddBook);