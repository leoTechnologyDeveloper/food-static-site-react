import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductosContainer from "./Components/ProductosContainer";
import Opiniones from "./Components/Opiniones";
import Porque from "./Components/Porque";
import Preguntas from "./Components/Preguntas";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <ProductosContainer />
        <Opiniones />
        <Porque />
        <Preguntas />
        <Contacto />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
