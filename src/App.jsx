import { useEffect, useState } from 'react';
import './App.css';
import { Radio } from './Radio';
const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = ()=> {

  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  })
  
  const [slide, setSlide] = useState(0);
  const [acertos, setAcertos] = useState(null);

  const resultado = ()=>{
    const corretas = perguntas.filter(({id, resposta}) =>{
      return respostas[id] === resposta
    })

    setAcertos(`Você acertou ${corretas.length} de ${perguntas.length}`);

    setInterval(()=>{
      window.location.reload();
    }, 5000)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(slide < perguntas.length - 1){
      setSlide((anterior) => anterior +1)

    }else{
      setSlide((anterior) => anterior +1)
      resultado();
    }
  }

  const handleChange = ({target})=>{
    setRespostas({...respostas, [target.id] : target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        perguntas.map((pergunta,index)=>(
          <Radio 
            key={index}
            active={slide === index}
            options={pergunta}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))
      }

      {
        acertos ? <p>{acertos}</p>
        : <button>Próxima</button>
      }
    </form>
  );
}

export default App;
