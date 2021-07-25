import React, { useState } from "react";
import styled from "styled-components";
import ProductItem from "../ProductItem";

const StyledProducts = styled.div`
    padding-top: 50px;
`

export default function Products() {
    const [products] = useState([
      {
        name: 'Curso de JavaScript',
        price: 2000,
        img: 'https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png'
      },
      {
        name: 'Curso de HTML',
        price: 1000,
        img: 'https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png'
      },
      {
        name: 'Curso de CSS',
        price: 1500,
        img: 'https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png'
      }
    ]);
    console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
    return (
      <>
        <StyledProducts className="container">
          {products.map((product, index) => {
            return <ProductItem item={product}></ProductItem>
          })}
        </StyledProducts>
      </>
    );
  }