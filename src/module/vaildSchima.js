import * as yup from 'yup';

const nameVaild = yup.string()
                .matches(/^[a-zA-Z]+$/ , 'it must be Characters')
                .min(2, 'Too Short!')
                .max(15, 'Too Long!')
                .required('Required');

const passVaild =  yup.string()
    .required('Required')
    .min(8, 'Too Short!')
 ;

const passdConfirVaild =  yup.string()
              .required('Required')
              .oneOf([yup.ref('password')], 'Passwords does not match');
 
 const SignupSchema = yup.object().shape({
    firstName: nameVaild,
    lastName: nameVaild,
    city: nameVaild,    
    username : yup.string()
               .required('Required'),  
               
    postalCode : yup.number(),
    address : yup.string()
                .required('Required'),     
    password : passVaild ,
    passwordConfirmation : passdConfirVaild ,
    email: yup.string()
              .email()
              .required('Required'), 

   about :  yup.string()
            .required('Required')
            .min(20, 'must be more than 20 letter!')
});

export default  SignupSchema;