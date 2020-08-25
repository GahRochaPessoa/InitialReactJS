import React from 'react'
export default props =>{
    return(
         <div>
        <button onClick={()=>{
            props.onClickar(Math.random(), 'Gerado ')
        }}>Alterar</button>    
    </div>
    )
}
   