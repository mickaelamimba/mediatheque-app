import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const ModifyAccount = ({name,address,city,phoneNumber,userName}) => {
    const handleSubmit=(values)=>{
        console.log(values)
    }
    return (
        <div >
            <Formik initialValues={{name:name,address:address,city:city
                ,phoneNumber:phoneNumber,userName:userName,password:''
                ,passwordConfirmation:''}} onSubmit={handleSubmit}>
                {({isSubmitting})=>(

        <Form>
            <h2>Modifier un utilisateur</h2>
            <div className='mb-3'>
                <Field className='form-control' name="name" value={name}  placeholder="Identifian"  />
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
                <Field className='form-control' type='password' name="password" placeholder=" Ancien mot de passe"  />
                <ErrorMessage className='text-danger' name="password" component="p"/>
            </div>
            <div className='mb-3'>
                <Field className='form-control' type='password' name="password" placeholder=" Nouveau mot de passe"  />
                <ErrorMessage className='text-danger' name="password" component="p"/>
            </div>
            <div className='mb-3'>
                <Field className='form-control' type='password' name="passwordConfirmation" placeholder="Confirmer le nouveau mot de passe"  />
                <ErrorMessage className='text-danger' name="passwordConfirmation" component="p"/>
            </div>

        </Form>




                )}

            </Formik>
        </div>

    );
};

export default ModifyAccount;