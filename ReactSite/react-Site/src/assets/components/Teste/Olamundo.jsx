import React from 'react'; // Importando react
import { useState } from 'react';

export function Ola_Mundo(){ // Definindo a Função
    return(  //Return para colocar as Tags
        <h1>Olá, mundo</h1>
    );
};

export const Button1 = () =>{
    const [valorBotao, setvalorBotao] = useState(0);    
    return (
        <input 
            type='button'
            value={'Botão: '+valorBotao}
            name='Botão'
            onClick={() => setvalorBotao(valorBotao + 1)}
        />
    );
};