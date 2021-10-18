import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const Register = () => {
    const RegisterSchema = Yup.object().shape({
        name : Yup.string().required(),
        address : Yup.string(),
        city: Yup.string(),
        phoneNumber: Yup.number(),
        userName : Yup.string(),
        password : Yup.string()
            .min(8,'Le mot de passe est trop court - il doit comporter au moins 8 caractères.')
            .matches('/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/','Le mot de passe ne peut contenir un chifre une lettre minuscule ou majuscule'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')

    })
    return (
        <section className="col-md-7 col-lg-7 mb-3">
            <Formik initialValues={{name:'',address:'',city:'',phoneNumber:'',userName:'',password:'',passwordConfirmation:''}}
                    validationSchema={RegisterSchema}
                    onSubmit={values => console.log(values) }>
                {({errors, touched })=>(
                    <Form className='card p-3' >
                        <h2>Créer un utilisateur</h2>
                        <div className='mb-3'>
                            <Field className='form-control' name="userName" placeholder="Identifian"  />
                            <ErrorMessage className='text-danger' name="userName" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' name="name" placeholder="Nom"  />
                            <ErrorMessage className='text-danger' name="name" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control ' name="address" placeholder="Adresse"  />
                            <ErrorMessage className='text-danger' name="address" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' name="city" placeholder="Ville"   />
                            <ErrorMessage className='text-danger' name="city" component="p"/>
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' type='tel' name="phoneNumber" placeholder="Numero de téléphone"   />
                            <ErrorMessage className='text-danger' name="phoneNumber" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' type='password' name="password" placeholder="Mot de passe"  />
                            <ErrorMessage className='text-danger' name="password" component="p"/>
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' type='password' name="passwordConfirmation" placeholder="Confirmer le mot de passe"  />
                            <ErrorMessage className='text-danger' name="passwordConfirmation" component="p"/>
                        </div>


                        <button className=" btn btn-primary" type="submit">Ajouter</button>

                    </Form>

                )}

            </Formik>

        </section>
    );
};

export default Register;