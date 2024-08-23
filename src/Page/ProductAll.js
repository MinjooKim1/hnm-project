import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      const searchQuery = query.get("q") || "";
      const PORT_NUM = "4000";
      const url = new URL(
        `https://my-json-server.typicode.com/MinjooKim1/hnm-project/products?q=${searchQuery}`
      );
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      const filteredData = searchQuery
        ? data.filter((item) => item.title.includes(searchQuery))
        : data;
      console.log("filtered:", filteredData);
      if (filteredData.length === 0) {
        alert("no result");
        return;
      }
      setProductList(filteredData);
    } catch (err) {
      console.error("error: ", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);
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
