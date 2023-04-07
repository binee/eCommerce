import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Service from "../api/Services";

import {Card, ListGroup} from 'react-bootstrap'

const ProductDetails : React.FC = () => {
  const { id } = useParams();
  const {
    status: statusPost,
    error: errorPost,
    data: products,
  } = useQuery({
    queryKey: ["products", parseInt(id!)],
    queryFn: () => Service.getProductsDetail(id!),
  });

  const {
    status: statusUser,
    error: errorUser,
    data: user,
  } = useQuery({
    enabled: products?.userId != null,
    queryKey: ["users", products?.userId],
    queryFn: () => Service.getUser(products!.userId!),
  });

  if (statusPost === "loading") return <h2>Loading</h2>;
  if (errorPost === "error") return <h1>{errorPost}</h1>;

  let userName = user?.name;
  if (statusUser === "loading") userName = "Loading...";
  if (errorUser === "error") userName = "Error...";

  return <>
  
       <Card className="shadow p-3 mb-5 bg-white rounded ">
       <Card.Header>{products?.title}</Card.Header>
      {/* <Card.Img className="mx-auto d-block" src="../../public/car.png" style={{ objectFit: "cover", maxWidth: "18rem" }} /> */}
      <Card.Body>
        <Card.Text>
          {products?.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{products?.category}</ListGroup.Item>
        <ListGroup.Item>${products?.price} USD</ListGroup.Item>
        {/* <ListGroup.Item>{products?.rating[rate]}</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">By {user?.name}</Card.Link>
      </Card.Body>
    </Card>
  </>;
};

export default ProductDetails;
