import './Campo.css'

const Campo = (props) => {

    const placeholderModificada = `${props.placeholder}...` 


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const tipo = props.type !== undefined ? props.type : 'text'

    return (
        <div className={`campo-texto campo-texto-${tipo}`}>
            <label>
                {props.label}
            </label>
            <input
                type={tipo} 
                value={props.valor} 
                onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo