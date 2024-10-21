import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {
    console.log(props)
    return (
       props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(props.cor, 0.6) }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} 
            value={props.cor} type='color' 
            className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => { 
                    return <Colaborador 
                            corDeFundo={props.cor} 
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo}
                            id={colaborador.id}
                            favorito={colaborador.favorito}
                            aoFavoritar={props.aoFavoritar}
                            imagem={colaborador.imagem}
                            aoDeletar={props.aoDeletar} />
                })
            }
            </div>
        </section>
    )
}

export default Time