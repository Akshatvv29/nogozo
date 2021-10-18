import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap';
import './css/search.css';
function Search() {
    return (
      <div className='container2'>
        <div className='ButtonDiv d-grid gap-2'>
<Button variant="primary" size="md" className = 'btn-1'>
  Class 9
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  Class 10
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  Class 11
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  Class 12
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  Class 1-8
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  IIT JEE
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  NEET
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  ICSE
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  GOVT
  </Button>
  <Button variant="primary" size="md" className = 'btn-1'>
  ENGG.
  </Button>

  </div>
        <div className='search'>
            <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search Products"
        className="mr-2"
        aria-label="Search"
      />
      <Button className = 'btn-2' variant="outline-success">Search</Button>
    </Form> 
        </div>
        </div>
    )
}

export default Search;
