import * as yup from 'yup';

let emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const space = /^\S*$/;

const passwordValid =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.]{8,}$/;

const SignIn = yup.object().shape({
  email_address: yup
    .string()
    .matches(emailreg, 'Email must be valid')
    .required('Required'),

  password: yup
    .string()
    .matches(space, 'spacing is not allowed')
    .required('Required'),
});

const Signup = yup.object().shape({
  email_address: yup
    .string()
    .matches(emailreg, 'Email must be valid')
    .required('Required'),

  first_name: yup.string().max(50, 'Too Long!').required('Required'),

  last_name: yup.string().max(50, 'Too Long!').required('Required'),

  new_password: yup
    .string()

    .min(8, 'Minimum 8 characters required')
    .matches(passwordValid, 'Weak Password')
    .required('Required'),

  confirm_password: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('new_password'), null], 'Passwords must match'),
});

const vehicleDetail = yup.object().shape({
  modal: yup.string().max(50, 'Too Long!').required('Required'),
  color: yup.string().max(50, 'Too Long!').required('Required'),
  regNo: yup.string().max(50, 'Too Long!').required('Required'),
});

export {SignIn, Signup, vehicleDetail};
