import React, { useState } from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
import Product from '../types/Product';

const CreateProduct = () => {
  const [productimage, setProductimage] = useState<string>('');
  const [inputs, setInputs] = useState([]);


  const handleInputs = (e : any) => {
    setInputs((inputs: Product[]) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleImageUpdload = (e:any) =>{
    const file = e.target.files[0];
    console.log(file)
    TransformFileData(file);
  }
  
  const TransformFileData = (file : any) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductimage(reader.result);
      };
    } else {
      setProductimage('')
  };
}
  return (
    <>
      <span>Create New Product</span>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="4">
              <Form.Control name="productName" type="text" placeholder="Product Name"  onChange={handleInputs}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="4">
              <Form.Control name="price" type="number" onChange={handleInputs} placeholder="Price" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="4">
              <Form.Control type="type" name="description" onChange={handleInputs} placeholder="Desciption" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="4">
              <Form.Select name="category" aria-label="Default select example" onChange={handleInputs}>
                <option>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Label column sm="2">
            Upload Image
          </Form.Label>
          <Col sm="4">
            <Form.Control type="file" name="productImage" accept="image/*" onChange={handleImageUpdload} placeholder="Upload" />
          </Col>
          <Col
            sm={4}
            className="w-50"
            style={{ height: "50vh", border: "1px solid black" }}
          >
            {productimage ?  <>
            <Image fluid src={productimage} alt="error!" />
          </> : 'Image Preview'}
            
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default CreateProduct;
