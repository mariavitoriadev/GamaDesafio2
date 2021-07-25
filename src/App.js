import { Header, ListItem } from "./components/Header";
import { Hero } from './components/Hero';
import Products from './components/Products';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <div className="header-wrapper container">
            <img className="logo" src="/logo.png" alt="Gama Logo" />
            <nav>
              <ul className="menu">
                  <li className="menu-item">
                      <ListItem href="#form">Comprar cursos</ListItem>
                  </li>
                  <li className="menu-item">
                      <ListItem href="#about-us">Quem Somos</ListItem>
                  </li>
                  <li className="menu-item">
                      <ListItem href="#differentials">Diferenciais</ListItem>
                  </li>
              </ul>
            </nav>
        </div>
      </Header>
      <Hero>
        <h1>Super promoção de inverno</h1>
        <img className="hero-image" src="/hero-image.jpg" alt="Promoção de inverno Gama Academy" />
      </Hero>
      <Products></Products>
    </>
  );
}

export default App;
