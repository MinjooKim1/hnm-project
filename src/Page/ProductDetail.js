import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, SetProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    SetProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} alt={product?.title} />
        </Col>

        <Col>
          <div>
            <div className="choice">
              {product?.choice === true ? "Conscious choice" : ""}
            </div>
            <h2>{product?.title}</h2>
            <div>$ {product?.price}</div>

            <div>
              <DropdownButton id="dropdown-basic-button" title="Choose Size">
                <Dropdown.Item href="#/action-1">
                  {product?.size[0]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {product?.size[1]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {product?.size[2]}
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <Button variant="dark" size="lg" className="cart-btn">
              Add to cart
            </Button>
          </div>
        </Col>
      </Row>
      ;
    </Container>
  );
};

export default ProductDetail;
