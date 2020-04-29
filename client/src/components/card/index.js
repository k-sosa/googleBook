import React, {useContext} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import BookContext from '../../utils/bookContext'

const Example = (props) => {
  const bookState = useContext(BookContext)
  return (
    <div>

      {bookState.results.length > 0 ?
        bookState.results.map(book=> {
        return (
          <Card className="mt-5">
          
          <Row>
              <Col sm="10">
        <CardTitle>{book.volumeInfo.title}</CardTitle>
        <CardSubtitle>Written By: {book.volumeInfo.author}</CardSubtitle>
                  </Col>
      
                  <Col sm="2">
      
                      <Row>
                          <Col sm="6">
                          <Button onClick={()=>{
                            window.location.href=book.volumeInfo.previewLink
                          }}>View</Button>
                          </Col>
                          <Col sm="6">
                          <Button>Save</Button>
                          </Col>
                      </Row>
                  
                  
      
                  </Col>
      
           </Row>
          <Row>
              <Col sm="2">
              <CardImg top width="100%" src={ book.volumeInfo.imageLinks != undefined ?     book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png" } alt="Card image cap" />
      
              </Col>
              <Col sm="10">
              <CardBody>
             
                
        <CardText>{book.volumeInfo.description}</CardText>
             
           </CardBody>
      
              </Col>
      
          </Row>
      
              
              
            </Card>
        )
      })  : ""  }
    
    </div>
  );
};

export default Example;