import Header  from "./components/Header";
import { Hero } from './components/Hero';
import Products from './components/Products';
import ClientsForm from "./components/ClientsForm";
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Hero>
        <h1>Super promoção de inverno</h1>
        <img className="hero-image" src="/hero-image.jpg" alt="Promoção de inverno Gama Academy" />
      </Hero>
      <Products></Products>
      <ClientsForm></ClientsForm>
    </>
  );
}

export default App;
