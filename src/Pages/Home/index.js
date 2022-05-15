import React, { useEffect, useState } from 'react';
import './home.css';
import { Card, Button } from 'react-bootstrap';
import api from '../../Services/Api/api';
import { Link } from 'react-router-dom';


export default function Home() {
  let newApi = 'http://localhost:5080';
  const [count, setCount] = useState('');
  const [artic, setArtic] = useState('');
  const [substring, setSbstring] = useState(18)



  //leitura da api
  useEffect(() => {
    async function loadArticles() {
      const response = await api.get('/posts')
      setArtic(response.data);
    }
    loadArticles();

  }, []);




  return (

    <div className='container-fluid' id='home'>



      <div className='content'>
        <div>
          <Link to='/pesquisar' className='pesquisaHome' >Pesquisar</Link>
        </div>
        <div className='lista-articles'>


          {Object.values(artic).map((artics) => {
            return (
              <article key={artics.articleid}>

                <Card style={{ width: '18rem' }}>
                  <Card.Img className='cardImg' variant="top" src={artics.imageUrl} />
                  <Card.Body>
                    <Card.Title>{artics.title.substr(0, substring)}<span onMouseOver={(e) => setSbstring(100)} onMouseLeave={(e) => setSbstring(18)}>  ...</span></Card.Title>
                    <Card.Text>
                    Data : {artics.publishedAt.substr(0, 9)}<br /> Horário : {artics.publishedAt.substr(11, 8)}
                    </Card.Text>
                    <Button className='btn-detalhes' variant="primary"><Link to={`/detalhes/${artics.articleid}`}>Detalhes</Link></Button>
                  </Card.Body>
                </Card>
              </article>

            )







          })}
        </div>
      </div>



    </div>
  )
}
