import ContactArea from "./component/ContactArea";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <ContactArea />
      <NavBar />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
