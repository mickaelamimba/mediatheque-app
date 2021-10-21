import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Row} from "react-bootstrap";
import {createAccount, login} from "../../redux/actions/usersAction";
import {connect} from "react-redux";


const Register = ({createAccount}) => {
    const handleSubmit = async (value,{resetFom})=>{
       await createAccount(value)
        resetFom()

    }
    const RegisterSchema = Yup.object().shape({
        name : Yup.string().required('name is required'),
        address : Yup.string(),
        firstName: Yup.string().required('firstName is required'),
        birthDate: Yup.date(),
        email : Yup.string(),
        password : Yup.string()
            .min(8,'Le mot de passe est trop court - il doit comporter au moins 8 caractères.'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')

    })
    return (
        <section className="Container mb-5 ">
            <Row className="justify-content-md-center">
            <Formik initialValues={{name:'',firstName:'',address:'',email:'',birthDate:'',password:'',passwordConfirmation:''}}
                    validationSchema={RegisterSchema}
                    onSubmit={handleSubmit}>
                {({errors, touched })=>(
                    <Form className='card p-3' >
                        <h2>Créer un utilisateur</h2>
                        <div className='mb-3'>
                            <Field className='form-control' name="name" placeholder="Nom"  />
                            <ErrorMessage className='text-danger' name="name" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' name="firstName" placeholder="Prénom"  />
                            <ErrorMessage className='text-danger' name="firstName" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control ' name="address" placeholder="Adresse"  />
                            <ErrorMessage className='text-danger' name="address" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' type="email" name="email" placeholder="Email"   />
                            <ErrorMessage className='text-danger' name="email" component="p"/>
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control'  type='date' name="birthDate" placeholder="Date de naissance "   />
                            <ErrorMessage className='text-danger' name="birthDate" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' type='password' name="password" placeholder="Mot de passe"  />
                            <ErrorMessage className='text-danger' name="password" component="p"/>
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' type='password' name="passwordConfirmation" placeholder="Confirmer le mot de passe"  />
                            <ErrorMessage className='text-danger' name="passwordConfirmation" component="p"/>
                        </div>


                        <button  className=" btn btn-primary" type="submit">Ajouter</button>

                    </Form>

                )}

            </Formik>
            </Row>
        </section>
    );
};
const mapStateToProps  = (state) => ({user:state.user})
export default connect(mapStateToProps,{createAccount}) (Register);