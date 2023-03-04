import ContactArea from "./component/ContactArea";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Demo from "./component/Demo";
import CoverArea from "./component/CoverArea";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
