import styled from 'styled-components';

const StyledProductItem = styled.div`
  width: 240px;
  margin: 0 auto 30px;

  img {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }

  p {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
    color: #333;
  }

  a {
    display: block;
    margin-left: auto;
    font-weight: 600;
    color: #FFFFFF;
    padding: 10px 20px;
    width: min-content;
    background-color: #1de240;
    text-transform: uppercase;
  }

  @media(min-width: 768px){
    margin: 0 20px 40px;
  }
`

export default function ProductItem({ item }) {

  let items = [];

  function addToCart(item) {
    
    if (!window.localStorage.cart) {
      items.push(item);
      window.localStorage.cart = JSON.stringify(items);
    }
    else {
      items = Object.values(JSON.parse(window.localStorage.cart));
      items.push(item);
      window.localStorage.cart = JSON.stringify(items);
    }
  }

  return (
    <>
      <StyledProductItem>
        <img src={item.img} />
        <p>{item.name}</p>
        <span>R$ {item.price}</span>
        <a type="button" onClick={() => { addToCart(item) }}>Comprar</a>
      </StyledProductItem>
    </>
  );
}
