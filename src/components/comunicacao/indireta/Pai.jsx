import React from 'react'
import Filho from './Filho'
export default props =>
    <div>
        <Filho {...props}><strong>João</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Maria</strong></Filho>
        <Filho {...props}><strong>Rosângela</strong></Filho>
        <Filho {...props}><strong>Ágatha</strong></Filho>
    </div>