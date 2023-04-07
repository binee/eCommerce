import { Col, Row } from "react-bootstrap";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from '../components/Search'
import Service from "../api/Services";
import Products from '../types/Product';
import { useEffect, useState } from "react";
import Banner from "../components/Banner";

const Product :React.FC  = () => {
  const [getResult, setGetResult] =  useState<Products[]>([]);
  const [productType, setProductType] = useState<string>('');

  const navigate = useNavigate();
  const {
    status,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: Service.getProducts,
    onSuccess: (res :any) => {
    setGetResult(res);
    }
  },);


 if (status === "loading") return <h2>Loading...</h2>;

const handleOnClick = () => {
  const findUsers =
  products && products?.length > 0
      ? products?.filter((item:Products) => item?.title.toLowerCase().includes(productType?.toLowerCase()))
      : products;
  setGetResult(findUsers);
};

const loopStatement =  Array.isArray(getResult) &&  getResult.length > 0? getResult : products;
  return (
    <>
      <Search productTypeValue={productType}
      onProductTypeChange={setProductType} 
      onHandle = {handleOnClick}/>

      <Row md={2} xs={1} lg={3} className="g-3">

         { loopStatement?.map((item) => (
          <Col key={item.id} style={{cursor:'pointer'}} onClick={() => navigate(`/product/${item.id}`)}>
            <Card>
              <Card.Img
                variant="top"
                height="350px"
                style={{ objectFit: "cover" }}
                src={item?.image}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Text className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span>{item.title}</span>
                    </Card.Text>
               </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Product;
