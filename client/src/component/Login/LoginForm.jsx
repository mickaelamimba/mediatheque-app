import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email : Yup.string(),
    password : Yup.string()


})

const LoginForm = ({handleLogin}) => {
    return (
        <>
            <Formik initialValues={{email: '',password :''} }
                    validationSchema={LoginSchema}
                    onSubmit={handleLogin}>
                {({errors, touched })=>(
                    <Form className='card p-5 m-5'>

                        <div className='mb-3'>
                            <Field className='form-control' type='email' name="email" placeholder="Email"  />
                            <ErrorMessage className='text-danger' name="email" component="p" />
                        </div>
                        <div className='mb-3 '>
                            <Field className='form-control' type='password' name="password" placeholder="Mot de passe"  />
                            <ErrorMessage className='text-danger' name="password" component="p"/>
                        </div>

                        <button className=" btn btn-primary"  type="submit">Se Connecter</button>

                    </Form>
                )}

            </Formik>

        </>
    );
};

export default LoginForm;