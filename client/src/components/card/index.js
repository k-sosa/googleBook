import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>

    <Row>
        <Col sm="10">
        <CardTitle>Harry Potter</CardTitle>
        <CardSubtitle>Written By Test Name</CardSubtitle>
            </Col>

            <Col sm="2">

                <Row>
                    <Col sm="6">
                    <Button>View</Button>
                    </Col>
                    <Col sm="6">
                    <Button>Save</Button>
                    </Col>
                </Row>
            
            

            </Col>

     </Row>
    <Row className="mt-5">
        <Col sm="2">
        <CardImg top width="100%" src="http://books.google.com/books/content?id=_zSzAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />

        </Col>
        <Col sm="10">
        <CardBody>
       
          
       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
       
     </CardBody>

        </Col>

    </Row>

        
        
      </Card>
    </div>
  );
};

export default Example;