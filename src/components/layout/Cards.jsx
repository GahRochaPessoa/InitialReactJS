import React from 'react'
import './Card.css'

export default ({titulo, children})=>
    <div className='Card'>
        <div className='Conteudo'>
            {children}
        </div>
        <div className="Footer">
            {titulo}
        </div>
    </div>