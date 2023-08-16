import { Routes, Route, BrowserRouter } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
//components
import ContactArea from "./component/ContactArea";
import NavBar from "./component/NavBar";
import Demo from "./component/Demo";
import CoverArea from "./component/CoverArea";
import Footer from "./component/Footer";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <ContactArea />
      <CoverArea />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route strict path="/" element={<Home />} />
          <Route strict path="/demo" element={<Demo />} />
          <Route strict path="/about" element={<About />} />
          <Route strict path="/contact" element={<Contact />} />
          <Route strict path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
