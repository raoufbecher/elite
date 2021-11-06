import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/Product list/ProductList";

function App() {
  return (
    <div>
      <Intro />
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
