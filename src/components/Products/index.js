import React, { useState } from "react";
import styled from "styled-components";
import ProductItem from "../ProductItem";

const StyledProducts = styled.div`
    padding-top: 50px;

    @media(min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export default function Products() {
    const [products] = useState([
      {
        id: 1,
        name: 'Curso de JavaScript',
        price: 2000,
        img: 'https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png'
      },
      {
        id: 2,
        name: 'Curso de HTML',
        price: 1000,
        img: 'https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png'
      },
      {
        id: 3,
        name: 'Curso de CSS',
        price: 1500,
        img: 'https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png'
      }
    ]);
    localStorage.setItem('products', JSON.stringify(products));
    return (
      <>
        <StyledProducts className="container">
          {products.map((product, index) => {
            return <ProductItem key={product.name} item={product}></ProductItem>
          })}
        </StyledProducts>
      </>
    );
  }