import React, { useState, useEffect, useContext} from 'react';
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
          value={props.searchValue}
         onChange={props.handleChange}
        />
      </FormGroup>
      <FormGroup className="text-right">
      <ButtonToggle color="primary"   onClick={props.handleSubmit}>Search</ButtonToggle>{' '}
      </FormGroup>
      
    </Form>
  );
}

export default SearchForm;