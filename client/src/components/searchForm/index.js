import React from 'react';
import { Form, FormGroup, Label, Input, FormText, ButtonToggle } from 'reactstrap';

const SearchForm = (props) => {
  return (
    <Form>
      
    <FormGroup>
        
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Search Book"
        />
      </FormGroup>
      <FormGroup className="text-right">
      <ButtonToggle color="primary">Search</ButtonToggle>{' '}
      </FormGroup>
      
    </Form>
  );
}

export default SearchForm;