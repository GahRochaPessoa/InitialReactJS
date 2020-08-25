import React from 'react'
import './App.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from'./components/basics/ComFilhos'
import Cards from './components/layout/Cards'
import Repeticao from'./components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalComIf from './components/basics/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import PaIndireto from'./components/comunicacao/indireta/Pai'
import Super from './components/comunicacao/indireta2/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'

export default props  =>(
    <div className='App'>
     
        <Cards titulo='Exercicio X' color='#005b96' borderColor='#854442'>
            Conteudo
        </Cards>
        <Cards titulo='Primeiro Componente' color='#fec8c1'borderColor='#854442'>
            <Primeiro/>
        </Cards>
        <Cards titulo="Criação de títulos e subtítulos" color='#ee4035' borderColor='#854442'>
            <ComParametro titulo='Esse é um título'
            subtitulo='Esse e um subtitulo'/>
        </Cards>
        <Cards titulo='Componente com filhos' color='#65c3ba' borderColor='#854442'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Cards>
        <Cards titulo='Exercicio 4 Repetição' color='#7bc043' borderColor='#854442'>
            <Repeticao/>
        </Cards>
        <Cards titulo="Condicional Ternária"color='#4d648d' borderColor='#854442'>
            <Condicional numero={4}></Condicional>
        </Cards>

        <Cards titulo="Condicional com IF" color='#fce9db' borderColor='#854442'>
            <CondicionalComIf numero={5}/>
        </Cards>
        <Cards titulo="Comunicação Direta" color='#7bc043' borderColor='#854442'>
            <Pai></Pai>
        </Cards>

        <Cards titulo="Comunicação Indireta" color='#7bc043' borderColor='#854442'>
            <PaIndireto sobrenome='Faria'></PaIndireto>
        </Cards>
        
        <Cards titulo="Gerenciamento de Estado" color='#7bc043' borderColor='#854442'>
            <Super></Super>
        </Cards>

        <Cards titulo="Input" color='#7bc043' borderColor='#854442'>
            <Input/>
        </Cards>

        
    </div>
);
