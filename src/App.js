import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
 ])

 const inicial = [
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[5].nome
  },
]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = (id) => {
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
       if(time.id === id) {
          time.cor = cor;
       }
       return time;
    }))
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  const resolverFavorito = (id) => {
      setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id) {
          colaborador.favorito  = !colaborador.favorito
        }
        return colaborador
      }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
          times={times.map(time => time.nome)} 
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
          cadastrarTime={cadastrarTime}
      />
      {times.map(time => <Time key={time.nome} 
                          nome={time.nome}  
                          cor={time.cor} 
                          id={time.id}
                          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                          aoFavoritar={resolverFavorito}
                          aoDeletar={deletarColaborador}
                          mudarCor={mudarCorDoTime}/>
                  )}

    </div>
  );
}

export default App;
