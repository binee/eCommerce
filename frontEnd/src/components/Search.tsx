import React from 'react'
import Button from 'react-bootstrap/Button'
import {Form} from 'react-bootstrap';

type ChildProps = {
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => any;
  onHandle:() => any
};

const Search:React.FC<ChildProps> = (props) => {
  return (
    <div className="mx-auto float-right">
         <Form.Control
         className='d-inline w-25'
        type="text"
        id="search"
        placeholder='Search'
        aria-describedby="passwordHelpBlock"
        value={props.productTypeValue}
      onChange={(event) => props.onProductTypeChange?.(event.target.value)}
      />
<Button onClick={props.onHandle} variant="primary" className="m-4">Search</Button>
    </div>
  )
}

export default Search