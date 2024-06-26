import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './componentes/BomDia'
import { BoaNoite, BoaTarde } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Ulisses" />
    </div>

, document.getElementById('root'))