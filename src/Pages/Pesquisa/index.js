import React, { useEffect, useState } from 'react';
import '../Home/home.css';
import { Card, Button } from 'react-bootstrap';
import apiPesquisa from '../../Services/Api/apiPesquisa';



export default function Pesquisa() {
  let newApi = 'http://localhost:5080';
  const [count, setCount] = useState('');
  const [artic, setArtic] = useState('');
  const [substring, setSbstring] = useState(18)
  const [textPesquisa, setTextPesquisa] = useState('')

  function retiraCarcteres(textPesquisa) {
    return textPesquisa.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
      .replace(/\-\-+/g, '-')	// Substitui multiplos hífens por um único hífen
      .replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string
  }

  //leitura da api
  useEffect(() => {
    async function loadArticles() {
      const response = await apiPesquisa.get(`${retiraCarcteres(textPesquisa)}`)
      setArtic(response.data);

    }
    loadArticles();

  }, [textPesquisa]);




  return (

    <div className='container-fluid' id='home'>

      <div className='content'>
        <div className='formPesquisa'>

          <form className='formPesquisa'>
            <div className='itensPesquisa'>
              <label>Pesquisar por :</label><br />
              <label className='labelData'>Data</label>
              <input className='radioData' type='radio' name='Pesquisa' value={'data'} onClick={(e) => setCount(e.target.value)} />
              <label className='labelTitulo'>Titulo</label>
              <input className='radioTitulo' type='radio' name='Pesquisa' value={'titulo'} onClick={(e) => setCount(e.target.value)} />
            </div>
            <div>
              <input className='textPesquisa' type='text' placeholder={count === 'data' ? 'digite a data para pesquisa' : 'digite o titulo para pesquisa'}
                onChange={(e) => setTextPesquisa(e.target.value)} />
            </div>

          </form>
        </div>

        {count !== 'data' ?
          <div className='lista-articles'>
            
            {Object.values(artic).map((artics) => {
              return (
                <article key={artics.id}>

                  <Card style={{ width: '18rem' }}>
                    <Card.Img className='cardImg' variant="top" src={artics.imageUrl} />
                    <Card.Body>
                      <Card.Title>{artics.title.substr(0, substring)}<span onMouseOver={(e) => setSbstring(100)} onMouseLeave={(e) => setSbstring(18)}>  ...</span></Card.Title>
                      <Card.Text className='cardTextPesquisa'>
                      {artics.summary.substr(0,90)}...
                      </Card.Text>
                      <hr/>
                      <Card.Text className='cardTextPesquisa'>
                      Fonte : <Card.Link className='fonteLink' href={artics.url} target="_blank">{artics.newsSite.trim()}</Card.Link>
                      </Card.Text>
                      <hr/>
                      <Card.Text className='cardTextPesquisa'>
                      Data : {artics.publishedAt.substr(0, 9)}<br /> Horário : {artics.publishedAt.substr(11, 8)}
                      </Card.Text>
                      <hr/>
                      <Card.Text className='cardTextPesquisa'>
                      Atualizado em : {artics.updatedAt.substr(0, 9)}<br /> Horário : {artics.updatedAt.substr(11, 8)}
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </article>

              )


            })}
          </div>

          :
          <div className='lista-articles'>
            <h1>Ainda nao implementado! Assim que possivel estará adicionada em nosso app</h1>
            <h2>Desde já pedimos desculpas pelo transtorno</h2>
          </div>


        }



      </div>

    </div>
  )
}