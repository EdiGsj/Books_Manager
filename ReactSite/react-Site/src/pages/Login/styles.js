import styled from 'styled-components';

export const HeaderWrapper = styled.header `
    display: flex;
    justify-content: center;
    align-items: center;

    height: 75px;

    background-color: #0999;
    color: #ffff;
`;

export const Title = styled.h1`
    margin: 0;
`;

export const DivCenter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyForm = styled.form `

    label{
        display: block;
        margin-top: 20vh;

        background-color: #ffff;
        border-radius: 20px;
        box-shadow: gray 20px 20px 10px 10px;
    };

    input[type='text'], 
    input[type='password'],
    input[type='email']{
        color: #000000;
        width: 400px;
        height: 30px;
        margin: 10px 10vw 30px;
        border: none;
        outline: none;
        background: none;
        transition: 1s;
    };

    input[type='text']:focus,
    input[type='password']:focus,
    input[type='email']:focus{
        border-bottom: solid 1px black;
        background-size: 0% 100%;
        background-color: lightblue;
        animation-name: fillBackground;
        animation-duration: 1s;
    };

    @keyframes fillBackground {
          from{
            background-size: 0% 100%;
            }
          to{
            background-size: 100% 100%;
          } 
        }
    
    input[type='submit']{
        background-color: #00FA9A;
        margin-left: 5vw;
        margin-bottom: 20px;
        border: none;
        border-radius: 100px;
        width: 40vw;
        height: 20px;
        transition: 0.2s;
    };

    input[type='submit']:hover{
        transform: scale(0.9);
    };

    input[type='submit']:active{
        background-color: #4c8435;
        color: #ffffffff;
    };
`;





