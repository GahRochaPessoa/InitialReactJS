import React from 'react'
import './Card.css'

export default ({titulo, children,color, borderColor})=>
    <div className='Card'  style={{borderColor}}>
        <div className='Conteudo'>
            {children}
        </div>
        <div className="Footer" style={{backgroundColor:color || '#000'}}>
            {titulo}
        </div>
    </div>