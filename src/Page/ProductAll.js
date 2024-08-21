import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductAll = () => {
  const [productList, SetProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:4000/products`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    SetProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
