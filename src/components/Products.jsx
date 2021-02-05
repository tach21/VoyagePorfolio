import React, { useEffect, useState } from "react";
import etsylogo from "../img/etsy.svg";
import styled from "styled-components";

const url = "http://localhost:3000/products";

function ProductList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <ProductPage>
      <h1>
        Products <span>en</span> Stock
      </h1>
      <Products>
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="product">
                <Items>
                  <span>
                    <img src={product.images[0].full} alt={product.title} />
                    <div>
                      <h4>{product.title}</h4>
                      <span>
                        {product.currencyCode} {product.price}
                      </span>
                    </div>
                  </span>
                </Items>
                <Logo>
                  <a href={product.etsyUrl}>
                    <img src={etsylogo} alt="etsy logo" />
                  </a>
                </Logo>
              </div>
            );
          })}
      </Products>
    </ProductPage>
  );
}

const ProductPage = styled.div`
  h1 {
    margin: 3rem 0rem 3rem 0rem;
    color: darkslategray;
    text-align: center;
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  .product {
    background-color: #f2eaec;
    text-align: left;
    width: 420px;
    margin: 16px;
    border-bottom: #aaa 1px;
    border-right: #aaa 1px;
    padding: 16px;
  }
`;

const Items = styled.div`
  text-align: center;
  img {
    padding-bottom: 8px;
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  h4 {
    color: #000;
    margin: 1rem 0rem 2rem 0rem;
  }
  span {
    font-size: 1.1rem;
    float: right;
  }
`;

const Logo = styled.div`
  float: right;
`;
export default ProductList;
