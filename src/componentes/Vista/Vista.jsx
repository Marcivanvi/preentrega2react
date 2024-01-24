import React from 'react'
import { useState } from 'react';
import './Vista.css'

const Vista = () => {
    const [modo, setModo] = useState(false);

    const cambiarModo = () => {
        setModo (!modo)
    }
    const estilo = modo ? "oscuro" : "claro";

    return (
        <div className={estilo}>
            <button onClick={cambiarModo}> Cambiar Modo</button>
            <h2>Componente Vista</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci facilis possimus consequatur quas nesciunt sint. Non nulla id unde quibusdam et fugit, odit, ipsam, iste nihil ducimus beatae molestiae?</p>
        </div>
    )
}

export default Vista