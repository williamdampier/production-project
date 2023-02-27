import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    //! Don't do this in prod! Testing only - remove later
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));

export default LoginFormAsync;
