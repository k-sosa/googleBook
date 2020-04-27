import React from 'react';
import { Jumbotron } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="mt-5">
        <h1 className="text-center">(React) Google Book Search</h1>
        
        <hr className="my-2" />
        <p className="text-center">Search for and save book of interest</p>
        
      </Jumbotron>
    </div>
  );
};

export default Example;