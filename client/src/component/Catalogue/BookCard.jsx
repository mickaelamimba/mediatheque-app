import React from 'react';
import {Card, Col, Stack} from "react-bootstrap";
import axios from "axios";

const BookCard = ({title,picture,releaseDate,description,author,genre,available,_id}) => {
    const onClickLoan= async(id)=>{
        const data = {book :id,
            token:'2e4qXOnax6Dlvi7S'
        }
         await axios.post('/loan-create',data)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{releaseDate}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <button className="btn btn-info m-2">Detail</button>
                    {!available?
                        <button className="btn btn-primary" disabled>Emprunter</button>:
                        <button className="btn btn-primary" onClick={()=>onClickLoan(_id)} >Emprunter</button>
                    }
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Stack direction="horizontal" className="align-items-center justify-content-center" gap={2}>
                        <Card.Text as="p">
                          Auteur:  {author}
                        </Card.Text>
                        <Card.Text as="p">
                           Genre: {genre}
                        </Card.Text>

                    </Stack>

                </Card.Footer>

            </Card>
            
        </Col>
    );
};

export default BookCard;