import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../Services/Api/api';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import './details.css';
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'



export default function Details() {
  const { id } = useParams();
  const [newId, setNewId] = useState(id)

  const [count, setCount] = useState('');
  const [artic, setArtic] = useState('');
  const [loading, setLoading] = useState(true);




  //leitura da api
  useEffect(() => {
    async function loadArticles() {
      const response = await api.get(`/posts/${newId}`)
      setArtic(response.data);


    }
    loadArticles();


  }, [newId]);

  function next() {

    let nextId = Number.parseInt(id) + 1;
    if (nextId > 10 ) {
      nextId = 1

    }
   
    return setNewId(nextId)
  }

  function previous() {
    let previousId = Number.parseInt(id) - 1;
    if (previousId < 1) {
      previousId = 10;


    }
    return setNewId(previousId)
  }
  function gerarLink(idLink) {
    
    if (idLink < 1) {
      return '/detalhes/10'

    }
    if (idLink > 10) {
      return '/detalhes/1'
    }
    
    return `/detalhes/${idLink}`
    
  }

  return (
    <div className='cardDetails'>
      <button className='voltar' onClick={previous}><Link to={gerarLink(Number.parseInt(id)-1)} ><AiFillLeftCircle size={30} color="#000" /></Link></button>
      
      
      

      {Object.values(artic).map((artics) => {
        return (
          <article key={artics.articleid}>
            <Card className='card'  >
              <Card.Img className='cardImage' variant="top" src={artics.imageUrl} />
              <Card.Body>
                <Card.Title>{artics.title}</Card.Title>
                <Card.Text>
                  {artics.summary}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Fonte : <Card.Link className='fonteLink' href={artics.url} target="_blank">{artics.newsSite.trim()}</Card.Link></ListGroupItem>
                <ListGroupItem>Data : {artics.publishedAt.substr(0, 9)}<br /> Horário : {artics.publishedAt.substr(11, 8)}</ListGroupItem>
                <ListGroupItem>Atualizado em : {artics.updatedAt.substr(0, 9)}<br /> Horário : {artics.updatedAt.substr(11, 8)}</ListGroupItem>
                <ListGroupItem>Lançamentos : {artics.launches}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>

              </Card.Body>

            </Card>
          </article>
        )

      })}
      <button className='avancar' onClick={next}><Link to={gerarLink(Number.parseInt(id)+1)} ><AiFillRightCircle size={30} color="#000" /></Link></button>

    </div>
  )
}
