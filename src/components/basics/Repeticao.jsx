import React from 'react'
import produtos from '../data/products'


export default props =>{
    
    const getProdutosListItem =()=>{
        return produtos.map(produto=>{
            return <li key={produto.id}>{produto.id}-{produto.name} R$ {produto.preco} </li>
        })

    } 
    
    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}       