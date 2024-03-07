import React from 'react';

import { MyForm } from './styles';
import {HeaderWrapper, Title, DivCenter} from './styles';


export const Login = () => {
    return(
        <>
            <HeaderWrapper>
                <Title>Login Será aqui</Title>
            </HeaderWrapper>

            <DivCenter>
            <MyForm>
                <label>
                    <input type='text' placeholder='Nome' name='name' autoComplete='off'/>
                    <br/>
                    <input type='email' placeholder='Email' name='email' autoComplete='off'/>
                    <br/>
                    <input type='password' placeholder='Senha' name='password'/>
                    <br/>
                    <input type='submit' value='Eviar' />
                </label>
            </MyForm>
            </DivCenter>
        </>
    );
};


export default Login;