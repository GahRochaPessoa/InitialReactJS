import React from 'react'
import './App.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from'./components/basics/ComFilhos'
import Cards from './components/layout/Cards'
import Repeticao from'./components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalComIf from './components/basics/CondicionalComIf'

export default props  =>(
    <div className='App'>
     
    <Cards titulo='Exercicio X'>
        Conteudo
    </Cards>
    <Cards titulo='Primeiro Componente'>
        <Primeiro/>
    </Cards>
    <Cards>
        <ComParametro titulo='Esse é um título'
        subtitulo='Esse e um subtitulo'/>
    </Cards>
    <Cards titulo='Componente com filhos'>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Cards>
    <Cards titulo='Exercicio 4 Repetição'>
        <Repeticao/>
    </Cards>
    <Cards>
        <Condicional numero={4}></Condicional>
    </Cards>

    <Cards>
        <CondicionalComIf numero={5}/>
    </Cards>
    </div>
);
