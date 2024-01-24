import { useState } from "react"
// 1. Siempre lo importamos.

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1)
    // 2. useState me retorna un array con dos elementos. El primero es el estado y el segundo es una funcion que me actualiza el valor de ese estado.

    // 3. Crear las funciones para incrementar y decrementar el contador}

    const incrementar = () => {
        if (contador < stock)
        setContador(contador + 1);
    }

    const decrementar = () => {
        if (contador > 1)
        setContador(contador - 1)
    }


    return (
        <div>
            <button onClick={decrementar}> Restar </button>
            <p> {contador} </p>
            <button onClick={incrementar}> Agregar </button>
        </div>
    )
}
// Incrementar y Decrementar van con parentesis porque sino se ejecutarian al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones
export default ItemCount