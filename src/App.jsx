import ContactArea from "./component/ContactArea";
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
    </div>
  );
}

export default App;
